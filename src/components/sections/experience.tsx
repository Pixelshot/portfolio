"use client"

import { portfolioData } from "@/lib/data"

export function Experience() {
    return (
        <section id="experience" className="bg-muted/50 py-8 md:py-12 lg:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Experience</h2>
                <div className="grid gap-8">
                    {portfolioData.experience.map((item) => (
                        <div key={item.title} className="grid gap-2 md:grid-cols-[1fr_3fr]">
                            <div className="text-sm text-muted-foreground">
                                {item.period}
                            </div>
                            <div className="grid gap-1">
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="text-muted-foreground">{item.company}</p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
