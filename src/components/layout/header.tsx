"use client"

import * as React from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/ui/theme-toggle"

import { motion } from "framer-motion"

export function Header() {
    const [activeSection, setActiveSection] = React.useState<string>("")

    React.useEffect(() => {
        const handleScroll = () => {
            // Check if we're at the bottom of the page
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
                setActiveSection("contact")
                return
            }

            const sections = ["projects", "contributions", "experience", "contact"]
            const scrollPosition = window.scrollY + 100 // Offset for header height

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const offsetTop = element.offsetTop
                    const offsetBottom = offsetTop + element.offsetHeight

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section)
                        return
                    }
                }
            }
            // If we're at the top, clear active section or set to first if desired
            if (window.scrollY < 100) {
                setActiveSection("")
            }
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll() // Initial check
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { name: "Projects", href: "#projects", id: "projects" },
        { name: "Contributions", href: "#contributions", id: "contributions" },
        { name: "Experience", href: "#experience", id: "experience" },
        { name: "Contact", href: "#contact", id: "contact" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-4 md:px-8">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block">
                            The Cyber Economist
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={`relative transition-colors hover:text-foreground/80 ${activeSection === item.id ? "text-foreground" : "text-foreground/60"
                                    }`}
                            >
                                {item.name}
                                {activeSection === item.id && (
                                    <motion.span
                                        layoutId="activeSection"
                                        className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-[#AAC4F5] dark:bg-[#FFD2A0]"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* Search or other items could go here */}
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}
