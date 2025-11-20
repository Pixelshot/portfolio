"use client"

import { portfolioData } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function ExperienceCard() {
    return (
        <div className="space-y-0 pt-4">
            {portfolioData.experience.map((job, index) => (
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
                        {index < portfolioData.experience.length - 1 && (
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
        </div>
    )
}
