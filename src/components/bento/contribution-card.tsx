"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ContributionCardProps extends React.HTMLAttributes<HTMLDivElement> {
    project: {
        title: string
        description: string
        tags: string[]
        link: string
        image?: string // Optional image for the top banner
    }
}

export function ContributionCard({ project, className }: ContributionCardProps) {
    return (
        <div className={cn("group cursor-pointer", className)}>
            <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-lg font-bold group-hover:underline decoration-2 underline-offset-4">
                    {project.title}
                </h3>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs text-muted-foreground/60">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    )
}
