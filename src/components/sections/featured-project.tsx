"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import Image from "next/image"

interface FeaturedProjectProps {
    title: string
    description: string
    galleryImages: string[]
    tags: string[]
    githubUrl?: string
    liveUrl: string
}

export function FeaturedProject({
    title,
    description,
    galleryImages,
    tags,
    liveUrl,
}: FeaturedProjectProps) {
    return (
        <div className="w-full py-12">
            {/* Project Content - Split Layout */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                {/* Left: Text Content */}
                <div className="lg:col-span-5 flex flex-col space-y-8 sticky top-24">
                    <div className="inline-flex">
                        <span className="border border-foreground/20 px-3 py-1 text-xs font-mono uppercase tracking-wider">
                            IN PROGRESS
                        </span>
                    </div>

                    <h3 className="text-6xl font-bold leading-none tracking-tight">
                        {title}
                    </h3>

                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {description}
                    </p>

                    {/* Technology Used */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-mono uppercase tracking-wider text-[#EFB6C8]">
                            Tech Stack:
                        </h4>
                        <div className="space-y-2">
                            {tags.map((tag, index) => (
                                <div key={index} className="relative pl-6 border-l border-border/50">
                                    <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                                    <span className="text-base font-medium">{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-8">
                        <Button
                            variant="link"
                            className="p-0 h-auto text-lg font-medium hover:no-underline group"
                            onClick={() => window.open(liveUrl, '_blank')}
                        >
                            View Project
                            <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>

                {/* Right: Image Gallery Grid */}
                <div className="lg:col-span-7 grid grid-cols-12 gap-4">
                    {galleryImages.length === 2 ? (
                        // 2-Image Layout (Asymmetric Side-by-Side 7/5)
                        <>
                            <div className="col-span-7 relative aspect-[4/5] w-full overflow-hidden bg-muted border-4 border-[#555879]">
                                <Image
                                    src={galleryImages[0]}
                                    alt={`${title} - Light Mode`}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                            <div className="col-span-5 relative aspect-[4/5] w-full overflow-hidden bg-muted border-4 border-[#555879]">
                                <Image
                                    src={galleryImages[1]}
                                    alt={`${title} - Dark Mode`}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </>
                    ) : (
                        // 4-Image Layout (Mixed Grid)
                        <>
                            {/* Image 1: Full Width */}
                            <div className="col-span-12 relative aspect-[4/3] w-full overflow-hidden bg-muted border-4 border-[#555879]">
                                <Image
                                    src={galleryImages[0]}
                                    alt={`${title} - Main`}
                                    fill
                                    className="object-contain transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            {/* Image 2: Larger (Form) */}
                            <div className="col-span-7 relative aspect-[16/10] w-full overflow-hidden bg-muted border-4 border-[#555879]">
                                <Image
                                    src={galleryImages[1]}
                                    alt={`${title} - Form`}
                                    fill
                                    className="object-contain transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            {/* Image 3: Smaller (Processing) */}
                            <div className="col-span-5 relative h-full w-full overflow-hidden bg-muted border-4 border-[#555879]">
                                <Image
                                    src={galleryImages[2]}
                                    alt={`${title} - Processing`}
                                    fill
                                    className="object-contain transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            {/* Image 4: Full Width (Recommendations) */}
                            <div className="col-span-12 relative aspect-[4/3] w-full overflow-hidden bg-muted border-4 border-[#555879]">
                                <Image
                                    src={galleryImages[3]}
                                    alt={`${title} - Recommendations`}
                                    fill
                                    className="object-contain transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
