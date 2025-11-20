"use client"

import { useState, useRef, useEffect } from "react"
import { portfolioData } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export function ExperienceCard() {
    const [isExpanded, setIsExpanded] = useState(false)
    const toggleButtonRef = useRef<HTMLDivElement>(null)
    const visibleItems = isExpanded ? portfolioData.experience : portfolioData.experience.slice(0, 4)

    useEffect(() => {
        if (toggleButtonRef.current) {
            setTimeout(() => {
                const element = toggleButtonRef.current
                if (element) {
                    const rect = element.getBoundingClientRect()
                    const scrollOffset = isExpanded
                        ? window.innerHeight * 0.01  // Scroll down 1% more when expanding
                        : -window.innerHeight * 0.3  // Scroll up 30% when collapsing

                    window.scrollBy({
                        top: rect.top - window.innerHeight / 2 + scrollOffset,
                        behavior: 'smooth'
                    })
                }
            }, 10)
        }
    }, [isExpanded])

    return (
        <div className="space-y-0 pt-4">
            {visibleItems.map((job, index) => (
                <div key={index} className="group relative grid grid-cols-[200px_auto_1fr] gap-6 items-start pb-12 last:pb-0">
                    {/* Left side - Period */}
                    <div className="flex items-center justify-start h-6">
                        <span className="text-2xl font-bold font-mono whitespace-nowrap">
                            {job.period}
                        </span>
                    </div>

                    {/* Center - Dot with vertical line */}
                    <div className="relative flex flex-col items-center h-full min-h-full">
                        <div className="h-6 w-6 rounded-full bg-primary ring-4 ring-background z-10 flex-shrink-0" />
                        {(index < visibleItems.length - 1 || !isExpanded) && (
                            <div className="absolute top-6 left-1/2 -translate-x-px w-px bottom-0 bg-border/50" style={{ height: 'calc(100% + 3rem - 24px)' }} />
                        )}
                    </div>

                    {/* Right side - Title, Company, Description */}
                    <div className="flex flex-col">
                        <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                            {job.title}
                        </h3>
                        <div className="text-base text-muted-foreground mt-1 font-mono">
                            <span>{job.company}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                            {job.description}
                        </p>
                    </div>
                </div>
            ))}

            {portfolioData.experience.length > 4 && (
                <div ref={toggleButtonRef} className="grid grid-cols-[200px_auto_1fr] gap-6 items-start">
                    <div></div>
                    <div className="flex justify-center">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            <ChevronDown className={cn(
                                "h-4 w-4 transition-transform",
                                isExpanded ? "rotate-180" : "group-hover:translate-y-0.5"
                            )} />
                            <span>{isExpanded ? "Show less" : "Expand for more"}</span>
                        </button>
                    </div>
                    <div></div>
                </div>
            )}
        </div>
    )
}
