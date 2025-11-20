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
        <div className="w-full">
            {/* Header / Title Section */}
            <div className="mb-16">
                <h2 className="text-[5rem] leading-[0.9] font-bold tracking-tight mb-4">
                    Projects
                    <sup className="text-sm font-normal ml-2 border rounded-full px-2 py-1 align-top top-4">9</sup>
                </h2>
                <p className="max-w-2xl text-lg text-muted-foreground">
                    A selection of interior design projects across hospitality, residential, and retail, weaving together brand narrative, artisan craft, and natural, regenerative material selections.
                </p>
                <div className="w-full h-px bg-border mt-12 border-dashed" />
            </div>

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
                <div className="lg:col-span-7 grid grid-cols-12">
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
                    <div className="col-span-7 relative aspect-[16/10] w-full overflow-hidden bg-muted border-x-4 border-b-4 border-[#555879]">
                        <Image
                            src={galleryImages[1]}
                            alt={`${title} - Form`}
                            fill
                            className="object-contain transition-transform duration-700 hover:scale-105"
                        />
                    </div>

                    {/* Image 3: Smaller (Processing) */}
                    <div className="col-span-5 relative h-full w-full overflow-hidden bg-muted border-r-4 border-b-4 border-[#555879]">
                        <Image
                            src={galleryImages[2]}
                            alt={`${title} - Processing`}
                            fill
                            className="object-contain transition-transform duration-700 hover:scale-105"
                        />
                    </div>

                    {/* Image 4: Full Width (Recommendations) */}
                    <div className="col-span-12 relative aspect-[4/3] w-full overflow-hidden bg-muted border-x-4 border-b-4 border-[#555879]">
                        <Image
                            src={galleryImages[3]}
                            alt={`${title} - Recommendations`}
                            fill
                            className="object-contain transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
