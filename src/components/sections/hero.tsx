"use client"

import { Button } from "@/components/ui/button"
import { portfolioData } from "@/lib/data"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

interface HeroProps {
    version: string
    lastUpdated: string
}

export function Hero({ version, lastUpdated }: HeroProps) {
    return (
        <section className="w-full min-h-[calc(100vh-8rem)] flex flex-col justify-center">
            <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
                    {portfolioData.personal.name.split(" ").map((word, i) => (
                        <span key={i} className="block">{word}</span>
                    ))}
                    {portfolioData.personal.headline.map((line, i) => (
                        <span key={i} className="block text-muted-foreground">
                            {line}
                            {i === portfolioData.personal.headline.length - 1 && (
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="inline-block ml-1 w-4 h-16 md:h-24 bg-[#AAC4F5] dark:bg-primary align-middle"
                                />
                            )}
                        </span>
                    ))}
                </h1>

                <div className="pt-10 flex items-center gap-6">
                    <div className="relative group">
                        <Button size="lg" className="rounded-full text-lg px-8 py-6 bg-[#AAC4F5] hover:bg-[#7077A1] dark:bg-[#F6B17A] dark:hover:bg-[#F7A5A5] hover:drop-shadow-xl text-white border-none transition-colors cursor-not-allowed">
                            Download Resume
                        </Button>
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-sm font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Coming Soon!
                        </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                        <p>v{version}</p>
                        <p>Updated {lastUpdated}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
