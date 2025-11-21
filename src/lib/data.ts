import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const portfolioData = {
    personal: {
        name: "The Cyber Economist.",
        headline: ["With Economic Logic,", "And Unyielding Defence."],
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
            title: "Cyber Security Intern",
            company: "RPMY",
            period: "2025",
            description: "Joined internship program at a local cyber security company.",
        },
        {
            title: "Bachelor of Computer Science",
            company: "Inti International University",
            period: "2023 - Present",
            description: "Final Year Student (3.8 CGPA). Major in Software Engineering.",
        },
        {
            title: "Web Developer",
            company: "Freelance",
            period: "2017 - Present",
            description: "Delivered corporate web solutions, notably for Prudential Insurance Malaysia.",
        },
        {
            title: "Head of Operations",
            company: "HY Connections Sdn. Bhd.",
            period: "2016 - Present",
            description: "Led operational strategy and internal process optimization.",
        },
        {
            title: "MaGIC Scholar",
            company: "Next Academy",
            period: "2015",
            description: "Completed Full Stack Bootcamp under the Malaysian Global Innovation and Creativity Centre scholarship.",
        },
        {
            title: "Full Stack Developer",
            company: "Freelance Project",
            period: "2012",
            description: "Built a football league portal handling 3,000 weekly visitors. Managed full lifecycle from CMS setup to live data integration.",
        },
        {
            title: "Head of Client & Services",
            company: "Equinox 8 Sdn. Bhd.",
            period: "2010 - 2012",
            description: "Managed 10,000+ E-commerce SKUs. Orchestrated international logistics, supplier relations, and fulfillment.",
        },
        {
            title: "Bachelor of Arts (Economics Major)",
            company: "University of Queensland",
            period: "2006 - 2009",
            description: "Foundation at IES College Brisbane (2006). The start of the journey.",
        },
    ],
};
