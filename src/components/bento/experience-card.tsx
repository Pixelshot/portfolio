"use client"

import { portfolioData } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function ExperienceCard() {
    return (
        <div className="space-y-12 pt-4">
            {portfolioData.experience.map((job, index) => (
                <div key={index} className="group relative pl-8 border-l border-border/50">
                    <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />

                    <div className="flex flex-col mb-2">
                        <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                            {job.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1 font-mono">
                            <span>{job.company}</span>
                            <span>•</span>
                            <span>{job.period}</span>
                        </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-md">
                        {job.description}
                    </p>
                </div>
            ))}
        </div>
    )
}
