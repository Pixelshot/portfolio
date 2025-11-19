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

export function ContributionCard({ project, className, ...props }: ContributionCardProps) {
    return (
        <Card className={cn("flex flex-col overflow-hidden h-full border-none shadow-lg", className)} {...props}>
            {/* Top Image Banner */}
            <div className="h-64 w-full bg-muted relative overflow-hidden group">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <span className="text-4xl">🚀</span>
                    </div>
                )}
                {/* Overlay gradient for text readability if needed, or just style */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content Area */}
            <div className="flex flex-col flex-1 p-6 bg-card">
                <div className="mb-4">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Contribution</span>
                    <h3 className="text-2xl font-bold mt-1 mb-2 text-card-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                        {project.description}
                    </p>
                </div>

                {/* Tags (Optional, keeping them small or hidden if not in design, but good for context) */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground dark:text-white">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Footer Button */}
                <div className="mt-auto pt-4 border-t border-border/50 flex justify-end">
                    <Link href={project.link} target="_blank">
                        <Button
                            className="rounded-full px-6 dark:bg-[#414961] dark:text-white dark:hover:bg-[#2f3546] dark:border-none"
                            size="sm"
                        >
                            READ MORE
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
    )
}
