import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const portfolioData = {
    personal: {
        name: "The Synthwave Economist",
        headline: "Optimizing Systems, Creating Worlds.",
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
            title: "Frontend Engineer Intern",
            company: "Tech Corp",
            period: "2023 - Present",
            description: "Building the future of finance dashboards. Improved performance by 40%.",
        },
        {
            title: "Economics Research Assistant",
            company: "University",
            period: "2021 - 2022",
            description: "Analyzed market data and published a paper on game theory in digital markets.",
        },
    ],
};
