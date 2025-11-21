"use client"

import { Button } from "@/components/ui/button"
import { portfolioData } from "@/lib/data"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

interface HeroProps {
    version: string
    lastUpdated: string
}

import { useState } from "react"
import { Typewriter } from "@/components/ui/typewriter"

// ... (HeroProps interface remains same)

export function Hero({ version, lastUpdated }: HeroProps) {
    const [typingIndex, setTypingIndex] = useState(0)

    const nameWords = portfolioData.personal.name.split(" ")
    const headlineLines = portfolioData.personal.headline
    const allTextItems = [...nameWords, ...headlineLines]

    return (
        <section className="w-full min-h-[calc(100vh-8rem)] flex flex-col justify-center">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                    {nameWords.map((word, i) => (
                        <span key={i} className="block">
                            <Typewriter
                                text={word}
                                start={i <= typingIndex}
                                showCursor={i === typingIndex}
                                onComplete={() => setTypingIndex(prev => prev + 1)}
                                speed={70}
                            />
                        </span>
                    ))}
                    {headlineLines.map((line, i) => {
                        const globalIndex = nameWords.length + i
                        const isLastItem = globalIndex === allTextItems.length - 1
                        return (
                            <span key={i} className="block text-muted-foreground">
                                <Typewriter
                                    text={line}
                                    start={globalIndex <= typingIndex}
                                    showCursor={globalIndex === typingIndex || (isLastItem && typingIndex >= allTextItems.length)}
                                    onComplete={() => setTypingIndex(prev => prev + 1)}
                                    speed={50}
                                />
                            </span>
                        )
                    })}
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
