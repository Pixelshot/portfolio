"use client"

import { Button } from "@/components/ui/button"
import { portfolioData } from "@/lib/data"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function Hero() {
    return (
        <section className="w-full py-20 md:py-32 flex flex-col justify-center">
            <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
                    {portfolioData.personal.name.split(" ").map((word, i) => (
                        <span key={i} className="block">{word}</span>
                    ))}
                    <span className="block text-muted-foreground">
                        {portfolioData.personal.headline}
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="inline-block ml-1 w-4 h-16 md:h-24 bg-primary align-middle"
                        />
                    </span>
                </h1>

                <div className="pt-10 flex items-center gap-6">
                    <Button size="lg" className="rounded-full text-lg px-8 py-6 bg-blue-500 hover:bg-blue-600 text-white border-none">
                        Download Resume
                    </Button>
                    <div className="text-sm text-muted-foreground">
                        <p>v2.304</p>
                        <p>Updated 1,037 days ago</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
