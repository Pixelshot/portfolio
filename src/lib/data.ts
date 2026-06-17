import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const portfolioData = {
    personal: {
        name: "The Cyber Economist.",
        headline: ["With Economic Logic,", "And Unyielding Defence..."],
        bio: "Economics major turned CS student (3.8 CGPA). Started coding in 2012. I blend economic efficiency with retro-futurist aesthetics.",
        email: "hello@example.com",
        socials: [
            { name: "GitHub", url: "https://github.com/Pixelshot", icon: Github },
            { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
            { name: "LinkedIn", url: "https://www.linkedin.com/feed/", icon: Linkedin },
            { name: "Email", url: "mailto:hello@example.com", icon: Mail },
        ],
    },
    skills: [
        "Java", "C++", "Python",
        "Git", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS",
        "Ruby", "Rails", "JavaScript", "TypeScript", "React",
        "Babel", "Remix", "Node.js", "Express", "MongoDB",
        "PostgreSQL", "Prisma", "Supabase", "Vercel", "WordPress"
    ],
    projects: [
        {
            title: "synthwave-vscode",
            description: "A retro-futurist VS Code theme with over 100k installs. Neon dreams for your IDE.",
            tags: ["Open Source", "CSS", "JavaScript", "Extension", "VS Code Theme"],
            link: "https://github.com/robb0wen/synthwave-vscode",
            linkLabel: "View Extension",
            galleryImages: [
                "/img/synthwave-vscode-banner.png",
                "/img/synthwave-vscode-code.png"
            ],
            galleryLayout: "stacked"
        },
        {
            title: "withastro/docs",
            description: "Contributed to the official documentation of Astro. Optimized build times and improved accessibility.",
            tags: ["Open Source", "Markdown", "Astro", "CSS"],
            link: "https://docs.astro.build/en/getting-started/",
            linkLabel: "View Documentation",
            galleryImages: [
                "/img/astro-docs-repo.png",
                "/img/astro-docs-site.png"
            ],
            galleryLayout: "side-by-side"
        },

    ],
    experience: [
        {
            title: "Cybersecurity Collaborator",
            company: "RPMY",
            period: "2025 - Present",
            description: "Collaborated on cybersecurity initiatives encompassing threat analysis, security assessments, and defensive tooling. Applied CS and software engineering fundamentals to real-world cyber risk and mitigation strategies. Engaged in knowledge-sharing across network security, vulnerability assessment, and secure system design.",
        },
        {
            title: "B.Sc. Computer Science (Hons) (ODL)",
            company: "INTI International University",
            period: "Oct 2023 - Dec 2026",
            description: "Software Engineering major.\nCGPA: 3.87 / 4.00 — Semester 14 of 16.",
        },
        {
            title: "Freelance Web Developer",
            company: "Self-Employed",
            period: "2017 - Present",
            description: "Delivered end-to-end corporate web solutions for clients including Prudential Insurance Malaysia. Managed full project lifecycle from requirements gathering through design, development, and deployment.",
        },
        {
            title: "Head of Operations",
            company: "HY Connections Sdn. Bhd. (Parent of Equinox8)",
            period: "2016 - Present",
            description: "Led operational strategy and internal process optimisation, overseeing cross-functional team execution.",
        },
        {
            title: "MaGIC Scholar",
            company: "MaGIC / Next Academy, Cyberjaya",
            period: "Oct 2015 - Dec 2015",
            description: "Full-Stack Coding Bootcamp under the Malaysian Global Innovation & Creativity Centre. Government-backed scholarship selected via competitive interview. Passed 2 progressive technical assessments and completed a final project to graduate.",
        },
        {
            title: "Head of Client Services",
            company: "Equinox8",
            period: "2012 - 2014",
            description: "Managed a marketplace-style e-commerce platform with 10,000+ products — predating Lazada and Shopee in Malaysia. Oversaw end-to-end client services and logistics, coordinating between suppliers and Pos Malaysia for fulfilment.",
        },
        {
            title: "Bachelor of Arts (Economics)",
            company: "University of Queensland, Australia",
            period: "2007 - 2009",
            description: "Economics Major. Preceded by Foundation Studies at International Education Services, Queensland, Australia (2006).",
        },
    ],
};
