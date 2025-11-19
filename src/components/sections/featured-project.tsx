"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface FeaturedProjectProps {
    title: string
    description: string
    image: string
    tags: string[]
    githubUrl?: string
    liveUrl: string
}

export function FeaturedProject({
    title,
    description,
    image,
    tags,
    liveUrl,
}: FeaturedProjectProps) {
    return (
        <Card className="overflow-hidden border-none shadow-lg">
            <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 md:h-auto bg-muted">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-contain p-4"
                    />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-4">{title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        {description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tag) => (
                            <Badge
                                key={tag}
                                variant="secondary"
                                className="dark:bg-muted dark:text-white px-3 py-1.5"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    {/* Action Button */}
                    <div className="flex gap-4">
                        <Button
                            className="text-white border-none cursor-pointer transition-all hover:opacity-90"
                            style={{ backgroundColor: '#5D688A' }}
                            onClick={() => window.open(liveUrl, '_blank')}
                        >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Site
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}
