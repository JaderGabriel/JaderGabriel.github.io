#!/usr/bin/env python3
"""Fetch public GitHub activity for the portfolio snapshot."""

from __future__ import annotations

import datetime as dt
import json
import os
import urllib.parse
import urllib.request
from collections import Counter, defaultdict
from pathlib import Path

USER = os.environ.get("GITHUB_ACTIVITY_USER", "JaderGabriel")
TOKEN = os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN") or ""
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data" / "github-activity.json"

HEADERS = {
    "Accept": "application/vnd.github+json",
    "User-Agent": "jadergabriel-github-pages-activity",
    "X-GitHub-Api-Version": "2022-11-28",
}
if TOKEN:
    HEADERS["Authorization"] = f"Bearer {TOKEN}"

TYPE_MAP = {
    "PushEvent": "push",
    "PullRequestEvent": "pr",
    "PullRequestReviewEvent": "review",
    "IssuesEvent": "issue",
    "CreateEvent": "create",
    "WatchEvent": "star",
    "ForkEvent": "fork",
    "IssueCommentEvent": "comment",
    "CommitCommentEvent": "comment",
}


def get_json(url: str):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=45) as response:
        return json.load(response)


def search_count(query: str) -> int:
    qs = urllib.parse.urlencode({"q": query, "per_page": 1})
    data = get_json(f"https://api.github.com/search/issues?{qs}")
    return int(data.get("total_count", 0))


def parse_ts(value: str) -> dt.datetime:
    return dt.datetime.fromisoformat(value.replace("Z", "+00:00"))


def fetch_events(max_pages: int = 3) -> list:
    events: list = []
    for page in range(1, max_pages + 1):
        batch = get_json(
            f"https://api.github.com/users/{USER}/events/public?per_page=100&page={page}"
        )
        if not batch:
            break
        events.extend(batch)
        if len(batch) < 100:
            break
    return events


OWNER_ORGS = ["i-Educar", "JGTECNOLOGIA"]
EXCLUDED_ORGS = {"SistemasUnimontesCODS"}
ORG_OVERRIDES = {
    "JGTECNOLOGIA": {
        "display_name": "BURI-TI",
        "avatar": "./assets/logo-buriti.png",
        "description": "Tecnologia para Pessoas",
    },
}


def fetch_owner_orgs() -> list[dict]:
    """Organizations where the user is owner/admin (known set + live org metadata)."""
    logins = list(OWNER_ORGS)
    if TOKEN:
        try:
            for item in get_json("https://api.github.com/user/orgs"):
                login = item["login"]
                if login in EXCLUDED_ORGS:
                    continue
                membership = get_json(
                    f"https://api.github.com/orgs/{login}/memberships/{USER}"
                )
                if membership.get("role") == "admin" and login not in logins:
                    logins.append(login)
        except Exception:
            pass

    orgs: list[dict] = []
    for login in logins:
        if login in EXCLUDED_ORGS:
            continue
        org = get_json(f"https://api.github.com/orgs/{login}")
        override = ORG_OVERRIDES.get(login, {})
        orgs.append(
            {
                "login": org["login"],
                "display_name": override.get("display_name", org["login"]),
                "url": org["html_url"],
                "description": override.get("description")
                or org.get("description")
                or "Organização GitHub",
                "avatar": override.get("avatar") or org.get("avatar_url"),
                "public_repos": org.get("public_repos", 0),
                "role": "owner",
            }
        )
    return orgs


def push_commit_count(payload: dict) -> int:
    if payload.get("distinct_size") is not None:
        return int(payload["distinct_size"])
    if payload.get("size") is not None:
        return int(payload["size"])
    commits = payload.get("commits")
    if isinstance(commits, list):
        return len(commits)
    return 0


def build_snapshot() -> dict:
    now = dt.datetime.now(dt.timezone.utc)
    cut30 = now - dt.timedelta(days=30)
    cut7 = now - dt.timedelta(days=7)
    user = get_json(f"https://api.github.com/users/{USER}")
    events = fetch_events()

    counts_30: Counter = Counter()
    counts_7: Counter = Counter()
    by_day: dict = defaultdict(Counter)
    commits_30 = 0

    for event in events:
        event_type = event.get("type")
        key = TYPE_MAP.get(event_type)
        if not key:
            continue
        created = parse_ts(event["created_at"])
        by_day[created.date().isoformat()][key] += 1
        if created >= cut30:
            counts_30[key] += 1
            if event_type == "PushEvent":
                commits_30 += push_commit_count(event.get("payload") or {})
        if created >= cut7:
            counts_7[key] += 1

    recent = []
    for event in events[:14]:
        event_type = event.get("type")
        key = TYPE_MAP.get(event_type, str(event_type or "").replace("Event", "").lower())
        repo = (event.get("repo") or {}).get("name", "")
        payload = event.get("payload") or {}
        detail = ""
        if event_type == "PushEvent":
            detail = f"{push_commit_count(payload)} commit(s)"
        elif event_type == "PullRequestEvent":
            pr = payload.get("pull_request") or {}
            detail = f"{payload.get('action', '')} #{pr.get('number', '')}".strip()
        elif event_type == "WatchEvent":
            detail = "star"
        elif event_type == "CreateEvent":
            detail = payload.get("ref_type", "create")
        recent.append(
            {
                "type": key,
                "repo": repo,
                "url": f"https://github.com/{repo}" if repo else "",
                "at": event.get("created_at"),
                "detail": detail,
            }
        )

    heatmap = []
    for offset in range(83, -1, -1):
        day = (now - dt.timedelta(days=offset)).date().isoformat()
        total = sum(by_day.get(day, {}).values())
        level = 0
        if total >= 8:
            level = 4
        elif total >= 4:
            level = 3
        elif total >= 2:
            level = 2
        elif total >= 1:
            level = 1
        heatmap.append({"date": day, "count": total, "level": level})

    return {
        "user": USER,
        "profile_url": f"https://github.com/{USER}",
        "updated_at": now.strftime("%Y-%m-%dT%H:%M:%SZ"),
        "profile": {
            "public_repos": user.get("public_repos", 0),
            "followers": user.get("followers", 0),
            "following": user.get("following", 0),
        },
        "totals": {
            "prs": search_count(f"author:{USER} type:pr"),
            "prs_merged": search_count(f"author:{USER} type:pr is:merged"),
            "prs_open": search_count(f"author:{USER} type:pr is:open"),
        },
        "window_30d": {
            "pushes": counts_30.get("push", 0),
            "commits": commits_30,
            "prs": counts_30.get("pr", 0),
            "reviews": counts_30.get("review", 0),
            "issues": counts_30.get("issue", 0),
            "stars": counts_30.get("star", 0),
        },
        "window_7d": {
            "pushes": counts_7.get("push", 0),
            "prs": counts_7.get("pr", 0),
            "reviews": counts_7.get("review", 0),
        },
        "heatmap": heatmap,
        "recent": recent,
        "orgs": fetch_owner_orgs(),
    }


def main() -> None:
    snapshot = build_snapshot()
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(snapshot, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
