"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
    project: {
        title: string
        description: string
        tags: string[]
        link: string
    }
}

export function ProjectCard({ project, className, ...props }: ProjectCardProps) {
    return (
        <Card className={cn("flex flex-col", className)} {...props}>
            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Link href={project.link} target="_blank" className="w-full">
                    <Button className="w-full dark:bg-[#414961] dark:text-white dark:hover:bg-[#2f3546] dark:border-none" variant="outline">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
