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
import Image from "next/image"

// ... (HeroProps interface remains same)

export function Hero({ version, lastUpdated }: HeroProps) {
    const [typingIndex, setTypingIndex] = useState(0)

    const nameWords = portfolioData.personal.name.split(" ")
    const headlineLines = portfolioData.personal.headline
    const allTextItems = [...nameWords, ...headlineLines]

    return (
        <section className="w-full min-h-[calc(100vh-8rem)] flex flex-col justify-center py-12 md:py-0 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-6 order-2 md:order-1">
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
                            <Button size="lg" className="rounded-full text-lg px-8 py-6 bg-[#AAC4F5] hover:bg-[#7077A1] active:bg-[#7077A1] dark:bg-[#F6B17A] dark:hover:bg-[#F7A5A5] dark:active:bg-[#F7A5A5] hover:drop-shadow-xl text-white border-none transition-colors cursor-not-allowed">
                                Download Resume
                            </Button>
                            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-sm font-medium text-muted-foreground opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus-within:opacity-100 transition-opacity whitespace-nowrap">
                                Coming Soon!
                            </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                            <p>v{version}</p>
                            <p>Updated {lastUpdated}</p>
                        </div>
                    </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center relative">
                    {/* Localized Background Grid */}
                    <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_60%_50%,#000_40%,transparent_100%)]" />

                    <div className="relative w-full max-w-[400px] md:max-w-[450px] aspect-[9/16]">
                        {/* Background Shape */}
                        <div className="absolute inset-0 bg-[#E6F98C] dark:bg-[#7077A1] rounded-full rotate-3 border-2 border-black dark:border-white/10 transition-colors duration-300 z-0" />

                        {/* Image Container */}
                        <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-black dark:border-white/10 bg-muted z-10 hover:scale-[1.02] transition-transform duration-500">
                            <Image
                                src="/portfolio-profile.jpg"
                                alt="The Cyber Economist"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
