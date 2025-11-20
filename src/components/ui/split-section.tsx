"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface SplitSectionProps {
    title: string
    description?: string
    image?: string
    galleryImages?: string[]
    galleryLayout?: "stacked" | "side-by-side"
    tags?: string[]
    link?: string
    linkLabel?: string
    badge?: string
    children?: React.ReactNode
    className?: string
    imagePriority?: boolean
}

export function SplitSection({
    title,
    description,
    image,
    galleryImages,
    galleryLayout = "stacked",
    tags,
    link,
    linkLabel = "View Project",
    badge,
    children,
    className,
    imagePriority = false,
}: SplitSectionProps) {
    return (
        <div className={cn("w-full py-12", className)}>
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                {/* Left: Text Content */}
                <div className={cn("flex flex-col space-y-8 sticky top-24", (image || galleryImages) ? "lg:col-span-5" : "lg:col-span-12 max-w-4xl")}>
                    {badge && (
                        <div className="inline-flex">
                            <span className="border border-foreground/20 px-3 py-1 text-xs font-mono uppercase tracking-wider">
                                {badge}
                            </span>
                        </div>
                    )}

                    <h3 className="text-5xl md:text-6xl font-bold leading-none tracking-tight">
                        {title}
                    </h3>

                    {description && (
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {description}
                        </p>
                    )}

                    {children}

                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2">
                            {tags.map((tag) => (
                                <span key={tag} className="text-sm text-muted-foreground/60">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {link && (
                        <div className="pt-4">
                            <Button
                                variant="link"
                                className="p-0 h-auto text-lg font-medium hover:no-underline group"
                                onClick={() => window.open(link, "_blank")}
                            >
                                {linkLabel}
                                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </Button>
                        </div>
                    )}
                </div>

                {/* Right: Image or Gallery */}
                {(image || galleryImages) && (
                    <div className="lg:col-span-7">
                        {galleryImages && galleryImages.length > 0 ? (
                            <div className="grid grid-cols-12">
                                {galleryImages.length === 2 ? (
                                    galleryLayout === "side-by-side" ? (
                                        // 2-Image Layout (Side-by-Side)
                                        <>
                                            <div className="col-span-7 relative aspect-[4/5] w-full overflow-hidden bg-muted border-4 border-[#555879]">
                                                <Image
                                                    src={galleryImages[0]}
                                                    alt={`${title} - 1`}
                                                    fill
                                                    className="object-contain transition-transform duration-700 hover:scale-105"
                                                />
                                            </div>
                                            <div className="col-span-5 relative aspect-[3/5] w-full overflow-hidden bg-muted border-r-4 border-y-4 border-[#555879]">
                                                <Image
                                                    src={galleryImages[1]}
                                                    alt={`${title} - 2`}
                                                    fill
                                                    className="object-contain transition-transform duration-700 hover:scale-105"
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        // 2-Image Layout (Stacked - Default)
                                        <>
                                            <div className="col-span-12 relative aspect-[16/9] w-full overflow-hidden bg-muted border-4 border-[#555879]">
                                                <Image
                                                    src={galleryImages[0]}
                                                    alt={`${title} - 1`}
                                                    fill
                                                    className="object-contain transition-transform duration-700 hover:scale-105"
                                                />
                                            </div>
                                            <div className="col-span-12 relative aspect-[16/9] w-full overflow-hidden bg-muted border-x-4 border-b-4 border-[#555879]">
                                                <Image
                                                    src={galleryImages[1]}
                                                    alt={`${title} - 2`}
                                                    fill
                                                    className="object-contain transition-transform duration-700 hover:scale-105"
                                                />
                                            </div>
                                        </>
                                    )
                                ) : (
                                    // Default / 4-Image Layout (Mixed)
                                    <>
                                        <div className="col-span-12 relative aspect-[4/3] w-full overflow-hidden bg-muted border-4 border-[#555879]">
                                            <Image
                                                src={galleryImages[0]}
                                                alt={`${title} - Main`}
                                                fill
                                                className="object-contain transition-transform duration-700 hover:scale-105"
                                            />
                                        </div>
                                        {galleryImages[1] && (
                                            <div className="col-span-7 relative aspect-[16/10] w-full overflow-hidden bg-muted border-x-4 border-b-4 border-[#555879]">
                                                <Image
                                                    src={galleryImages[1]}
                                                    alt={`${title} - Form`}
                                                    fill
                                                    className="object-contain transition-transform duration-700 hover:scale-105"
                                                />
                                            </div>
                                        )}
                                        {galleryImages[2] && (
                                            <div className="col-span-5 relative h-full w-full overflow-hidden bg-muted border-r-4 border-b-4 border-[#555879]">
                                                <Image
                                                    src={galleryImages[2]}
                                                    alt={`${title} - Processing`}
                                                    fill
                                                    className="object-contain transition-transform duration-700 hover:scale-105"
                                                />
                                            </div>
                                        )}
                                        {galleryImages[3] && (
                                            <div className="col-span-12 relative aspect-[4/3] w-full overflow-hidden bg-muted border-x-4 border-b-4 border-[#555879]">
                                                <Image
                                                    src={galleryImages[3]}
                                                    alt={`${title} - Recommendations`}
                                                    fill
                                                    className="object-contain transition-transform duration-700 hover:scale-105"
                                                />
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        ) : (
                            // Single Image Fallback
                            <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted rounded-sm">
                                <Image
                                    src={image!}
                                    alt={title}
                                    fill
                                    priority={imagePriority}
                                    className="object-contain transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
