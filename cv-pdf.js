(function () {
    const NAVY = [12, 28, 46];
    const CORAL = [199, 70, 52];
    const INK = [27, 36, 48];
    const MUTED = [74, 90, 106];
    const RULE = [197, 208, 220];

    const DATA = {
        name: 'Jader Gabriel da Silva Alves',
        title: 'Analista de Sistemas e Projetos · Desenvolvedor Full Stack · CEO, BURI-TI',
        contacts: [
            'jadergabriel8@gmail.com',
            '+55 (38) 99175-8416',
            'Pirapora / Buritizeiro, MG',
            'linkedin.com/in/jadergabriel',
            'github.com/JaderGabriel',
            'buriti.dev.br'
        ],
        keywords: 'PHP · Laravel · Moodle/LMS · educação corporativa · i-Educar · Power BI · SQL · Rails · WordPress · AWS · gestão de projetos',
        summary:
            'Profissional de TI com mais de 10 anos em software, dados e operação educacional. Atua na interseção de engenharia e aprendizagem: PHP/Laravel e Ruby on Rails, implantação e gestão de Moodle (LMS/AVA), educação corporativa em escala (jornadas com mais de 100 mil colaboradores), ecossistema i-Educar e Business Intelligence. Une requisitos, código, indicadores e capacitação no mesmo ciclo de entrega.',
        education: [
            {
                title: 'Especialização lato sensu em Tecnologias Aplicadas à Educação',
                when: '2020 – 2022',
                org: 'Instituto Federal do Norte de Minas Gerais (IFNMG) — Campus Montes Claros'
            },
            {
                title: 'Bacharelado em Sistemas de Informação',
                when: '2011 – 2015',
                org: 'Universidade Estadual de Montes Claros (UNIMONTES)'
            },
            {
                title: 'Técnico em Economia e Meio Ambiente',
                when: '2016 – 2017',
                org: 'Instituto Federal do Norte de Minas Gerais (IFNMG) — Campus Montes Claros'
            }
        ],
        skills: [
            {
                label: 'Tecnologia',
                body: 'PHP, Laravel, APIs REST, Ruby on Rails, JavaScript, WordPress, SQL, MySQL, PostgreSQL, ETL, Linux, AWS, Docker, Git, Power BI, Datadog.'
            },
            {
                label: 'Educação',
                body: 'Moodle (implantação, operação, papéis e conteúdo); educação corporativa; i-Educar; Educacenso/INEP; capacitação de gestores e equipes.'
            },
            {
                label: 'Projetos',
                body: 'Análise de requisitos, gestão ágil, product ownership, integrações (biometria, catracas, ERPs), compliance de dados, code review e testes.'
            }
        ],
        experience: [
            {
                title: 'CEO e analista de sistemas e projetos',
                when: 'Dez/2020 – atual',
                org: 'BURI-TI Tecnologia — Buritizeiro / MG',
                bullets: [
                    'Governança de TI, consultoria, desenvolvimento Laravel e BI para educação e gestão pública/privada.',
                    'Sistemas, painéis Power BI e integrações i-Educar, do escopo à operação; pacotes open source e projetos NDA.'
                ]
            },
            {
                title: 'Product owner e consultor de TI',
                when: 'Fev/2026 – atual',
                org: 'Serventec Assessoria',
                bullets: [
                    'Gestão, desenvolvimento, implantação e suporte a equipes no uso de software livre para dados e indicadores educacionais.'
                ]
            },
            {
                title: 'Consultor sênior — Moodle',
                when: 'Dez/2024 – atual',
                org: 'CERTRO · Campina Grande / PB',
                bullets: [
                    'Consultoria, suporte e apoio ao Moodle como ferramenta de ensino-aprendizagem.'
                ]
            },
            {
                title: 'Gerente de TI e analista de educação corporativa',
                when: 'Jan/2021 – Set/2025',
                org: 'TecnoCursos',
                bullets: [
                    'Gestão de AVA Moodle e ERP de aprendizagem/segurança; jornada com mais de 100 mil colaboradores e reporting gerencial.',
                    'Integração e compliance com ERPs de multinacionais (Nestlé, Coca-Cola FEMSA, Grupo ADEO, Heineken); code review e testes.'
                ]
            },
            {
                title: 'Assistente educacional',
                when: 'Abr/2016 – Ago/2024',
                org: 'Prefeitura Municipal de Pirapora / MG',
                bullets: [
                    'Apoio à implantação de sistemas educacionais e ambientes virtuais de aprendizagem na rede municipal.'
                ]
            },
            {
                title: 'Gerente de consultoria de TI',
                when: 'Jun/2022 – Set/2023',
                org: 'Colégio IESC — Instituto Educacional Santa Cruz · Montes Claros / MG',
                bullets: [
                    'Gestão de AVA Moodle, site de vendas e conteúdos em WordPress.'
                ]
            },
            {
                title: 'Gerente de sistemas da informação',
                when: 'Out/2020 – Mar/2023',
                org: 'LH Idioma Espanhol',
                bullets: [
                    'Integração WordPress–Moodle e de e-commerce com bases de gestão de escola de idiomas.'
                ]
            },
            {
                title: 'Consultor Moodle',
                when: 'Mai/2021 – Mai/2022',
                org: 'PISAC — Parque de Inovação e Sustentabilidade do Ambiente Construído (UnB)',
                bullets: [
                    'Implantação e customização de Moodle; treinamento de gestores e instrutores (educação corporativa e segurança do trabalho).'
                ]
            },
            {
                title: 'Consultor de TI',
                when: 'Dez/2022 – Dez/2023',
                org: 'INEPpsin',
                bullets: [
                    'Gestão de AVA Moodle e boas práticas de recursos AWS.'
                ]
            },
            {
                title: 'Desenvolvedor web — Ruby on Rails',
                when: 'Nov/2025 – Mar/2026',
                org: 'Nobe Sistemas · MG',
                bullets: [
                    'Desenvolvimento Rails com metodologias ágeis no dia a dia.'
                ]
            },
            {
                title: 'Consultor de tecnologia da educação',
                when: 'Set/2025 – Dez/2025',
                org: 'Nobug Tecnologia',
                bullets: [
                    'Manutenção, uso e criação de conteúdo para LMS Moodle.'
                ]
            },
            {
                title: 'Professor de informática',
                when: 'Fev/2025 – Jul/2025',
                org: 'Instituto Educacional AlfaUnipac · Buritizeiro / MG',
                bullets: [
                    'Introdução à Informática em cursos técnicos do programa Trilhas de Futuro (SEE-MG).'
                ]
            },
            {
                title: 'Gerente de projetos',
                when: 'Mai/2024 – Set/2024',
                org: 'UNIMONTES — Universidade Estadual de Montes Claros',
                bullets: [
                    'Condução de projetos acadêmicos e de tecnologia na universidade.'
                ]
            },
            {
                title: 'Especialista em integração',
                when: 'Mar/2022 – Ago/2022',
                org: 'Cento e Vinte — Conversão Digital · Buritizeiro / MG',
                bullets: [
                    'Integração de sistemas e dados em operação digital.'
                ]
            },
            {
                title: 'Professor',
                when: 'Out/2015 – Dez/2017',
                org: 'Secretaria de Estado de Educação de Minas Gerais (SEE-MG) · Pirapora / MG',
                bullets: [
                    'Docência na rede estadual, com atuação em informática e formação de estudantes.'
                ]
            }
        ],
        projects: [
            ['Servlitcys', '(2026 – atual) — sistema gerencial de dados educacionais e CadÚnico para redes municipais (Laravel + i-Educar).'],
            ['GIDE', '(2026 – atual) — conexão de dados biométricos do i-Educar para presença e comunicação com responsáveis.'],
            ['i-Educar Relatórios Avançados', '— PDF/Excel/QR Code (open source).'],
            ['Power BI, Pulse e Educacenso', '— indicadores, monitoramento e carga INEP no i-Educar.'],
            ['Odin', '(2023 – atual) — gestão Moodle para educação corporativa e segurança do trabalho (código confidencial).']
        ],
        extras: [
            'Idioma: Português (nativo).',
            'Disponibilidade: consultoria e desenvolvimento, remoto ou presencial no Norte de Minas.',
            'Certificação: TEEHIP — Tecnologia Educacional, Ensino Híbrido e Inovação Pedagógica (2024).',
            'Portfólio: jadergabriel.github.io · buriti.dev.br'
        ]
    };

    function bufferToBase64(buffer) {
        const bytes = new Uint8Array(buffer);
        let binary = '';
        const step = 0x8000;
        for (let i = 0; i < bytes.length; i += step) {
            binary += String.fromCharCode.apply(null, bytes.subarray(i, i + step));
        }
        return btoa(binary);
    }

    async function toDataUrl(url) {
        const res = await fetch(url);
        const blob = await res.blob();
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }

    async function loadFonts(pdf) {
        const files = [
            ['./assets/fonts/ibm-plex-sans-400.ttf', 'IBMPlexSans-Regular.ttf', 'IBMPlexSans', 'normal'],
            ['./assets/fonts/ibm-plex-sans-700.ttf', 'IBMPlexSans-Bold.ttf', 'IBMPlexSans', 'bold'],
            ['./assets/fonts/ibm-plex-serif-700.ttf', 'IBMPlexSerif-Bold.ttf', 'IBMPlexSerif', 'bold']
        ];
        await Promise.all(files.map(async ([url, vfs, family, style]) => {
            const buf = await fetch(url).then((r) => r.arrayBuffer());
            pdf.addFileToVFS(vfs, bufferToBase64(buf));
            pdf.addFont(vfs, family, style);
        }));
    }

    function drawCv(pdf, photo) {
        const M = 14;
        const PAGE = 297;
        const W = 210 - M * 2;
        const BOTTOM = PAGE - 12;
        let y = M;

        const sans = (style, size) => {
            pdf.setFont('IBMPlexSans', style);
            pdf.setFontSize(size);
        };
        const serif = (size) => {
            pdf.setFont('IBMPlexSerif', 'bold');
            pdf.setFontSize(size);
        };
        const lh = (size) => size * 0.42;

        function ensure(need, contTitle) {
            if (y + need > BOTTOM) {
                pdf.addPage();
                y = M;
                if (contTitle) section(contTitle);
            }
        }

        function section(title) {
            ensure(12);
            y += 2.5;
            pdf.setFillColor(...NAVY);
            pdf.rect(M, y, W, 6.6, 'F');
            pdf.setTextColor(255, 255, 255);
            sans('bold', 9);
            pdf.text(title.toUpperCase(), M + 2.4, y + 4.5);
            y += 9.2;
            pdf.setTextColor(...INK);
        }

        function wrapped(text, x, width, size, style, color, leading) {
            sans(style, size);
            pdf.setTextColor(...color);
            const lines = pdf.splitTextToSize(text, width);
            const step = leading || lh(size);
            ensure(lines.length * step);
            pdf.text(lines, x, y);
            y += lines.length * step;
            return lines.length;
        }

        const photoW = 28;
        const photoH = 37.3;
        if (photo) {
            pdf.setDrawColor(...RULE);
            pdf.setLineWidth(0.2);
            pdf.rect(M, y, photoW, photoH);
            pdf.addImage(photo, 'JPEG', M, y, photoW, photoH);
        }

        const tx = M + photoW + 5;
        const tw = W - photoW - 5;
        let ty = y + 5;
        serif(16);
        pdf.setTextColor(...NAVY);
        pdf.text(DATA.name, tx, ty);
        ty += 6.2;
        sans('bold', 10);
        pdf.setTextColor(...CORAL);
        const titleLines = pdf.splitTextToSize(DATA.title, tw);
        pdf.text(titleLines, tx, ty);
        ty += titleLines.length * 4.4 + 1.5;
        sans('normal', 9);
        pdf.setTextColor(...MUTED);
        const contact = DATA.contacts.join('  ·  ');
        const contactLines = pdf.splitTextToSize(contact, tw);
        pdf.text(contactLines, tx, ty);
        ty += contactLines.length * 4 + 1.8;
        sans('normal', 9);
        pdf.setTextColor(...NAVY);
        const kwLines = pdf.splitTextToSize('Palavras-chave: ' + DATA.keywords, tw);
        pdf.text(kwLines, tx, ty);
        ty += (kwLines.length - 1) * 4;
        y = Math.max(y + photoH, ty) + 5;
        pdf.setDrawColor(...NAVY);
        pdf.setLineWidth(0.7);
        pdf.line(M, y, M + W, y);
        y += 3;

        section('Resumo profissional');
        wrapped(DATA.summary, M, W, 10, 'normal', INK, 4.5);
        y += 1;

        section('Formação acadêmica');
        DATA.education.forEach((item) => {
            ensure(12);
            sans('bold', 10.5);
            pdf.setTextColor(...CORAL);
            pdf.text(item.when, M + W, y, { align: 'right' });
            const dateW = pdf.getTextWidth(item.when);
            pdf.setTextColor(...INK);
            const titleLines = pdf.splitTextToSize(item.title, W - dateW - 4);
            pdf.text(titleLines, M, y);
            y += titleLines.length * 4.4;
            sans('normal', 9);
            pdf.setTextColor(...MUTED);
            pdf.text(item.org, M, y);
            y += 5.4;
        });

        section('Competências');
        const gap = 4;
        const colW = (W - gap * 2) / 3;
        sans('bold', 9);
        const bodies = DATA.skills.map((col) => {
            sans('normal', 9);
            return pdf.splitTextToSize(col.body, colW);
        });
        const rows = Math.max(...bodies.map((b) => b.length));
        ensure(6 + rows * 3.9);
        DATA.skills.forEach((col, i) => {
            const x = M + i * (colW + gap);
            sans('bold', 9);
            pdf.setTextColor(...CORAL);
            pdf.text(col.label.toUpperCase(), x, y);
        });
        y += 4.4;
        DATA.skills.forEach((col, i) => {
            const x = M + i * (colW + gap);
            sans('normal', 9);
            pdf.setTextColor(...INK);
            pdf.text(bodies[i], x, y);
        });
        y += rows * 3.9 + 1.5;

        section('Experiência profissional');
        DATA.experience.forEach((job) => {
            const bulletLines = job.bullets.map((b) => {
                sans('normal', 9.5);
                return pdf.splitTextToSize(b, W - 5);
            });
            const blockH = 10 + bulletLines.reduce((n, l) => n + l.length * 4.1, 0);
            ensure(blockH, 'Experiência profissional');
            sans('bold', 10.5);
            pdf.setTextColor(...CORAL);
            pdf.text(job.when, M + W, y, { align: 'right' });
            const dateW = pdf.getTextWidth(job.when);
            pdf.setTextColor(...INK);
            const tLines = pdf.splitTextToSize(job.title, W - dateW - 4);
            pdf.text(tLines, M, y);
            y += tLines.length * 4.3;
            sans('normal', 9);
            pdf.setTextColor(...MUTED);
            const orgLines = pdf.splitTextToSize(job.org, W);
            pdf.text(orgLines, M, y);
            y += orgLines.length * 4 + 0.6;
            sans('normal', 9.5);
            pdf.setTextColor(...INK);
            job.bullets.forEach((bullet, idx) => {
                const lines = bulletLines[idx];
                pdf.text('•', M, y);
                pdf.text(lines, M + 4, y);
                y += lines.length * 4.1;
            });
            y += 1.6;
        });

        section('Projetos selecionados');
        DATA.projects.forEach(([name, rest]) => {
            sans('bold', 9.5);
            const full = name + ' ' + rest;
            const lines = pdf.splitTextToSize(full, W - 5);
            ensure(lines.length * 4.2 + 1);
            pdf.setTextColor(...INK);
            pdf.text('•', M, y);
            pdf.text(name, M + 4, y);
            const nameW = pdf.getTextWidth(name + ' ');
            sans('normal', 9.5);
            const first = lines[0].slice((name + ' ').length);
            pdf.text(first, M + 4 + nameW, y);
            if (lines.length > 1) {
                pdf.text(lines.slice(1), M + 4, y + 4.2);
            }
            y += lines.length * 4.2 + 0.8;
        });

        section('Idiomas e informações adicionais');
        const extraW = (W - 4) / 2;
        DATA.extras.forEach((line, i) => {
            const col = i % 2;
            const x = M + col * (extraW + 4);
            if (col === 0) ensure(10);
            sans('normal', 9.5);
            pdf.setTextColor(...INK);
            const lines = pdf.splitTextToSize(line, extraW);
            pdf.text(lines, x, y);
            if (col === 1) y += Math.max(8, lines.length * 4.2 + 1.2);
        });
        if (DATA.extras.length % 2) y += 8;
    }

    window.generateCurriculumPdf = async function generateCurriculumPdf() {
        if (!window.jspdf) throw new Error('jsPDF indisponível.');
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait', compress: true });
        const [photo] = await Promise.all([
            toDataUrl('./assets/jader-gabriel-cv.jpg'),
            loadFonts(pdf)
        ]);
        drawCv(pdf, photo);
        pdf.save('Jader-Gabriel-Curriculo.pdf');
    };
})();
