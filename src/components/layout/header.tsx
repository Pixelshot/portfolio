"use client"

import * as React from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export function Header() {
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
                        <Link
                            href="#projects"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Projects
                        </Link>
                        <Link
                            href="#contributions"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Contributions
                        </Link>
                        <Link
                            href="#experience"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Experience
                        </Link>
                        <Link
                            href="#contact"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Contact
                        </Link>
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
