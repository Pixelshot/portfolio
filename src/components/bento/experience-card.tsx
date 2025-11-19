"use client"

import { portfolioData } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ExperienceCardProps extends React.HTMLAttributes<HTMLDivElement> { }

export function ExperienceCard({ className, ...props }: ExperienceCardProps) {
    return (
        <Card className={cn("flex flex-col", className)} {...props}>
            <CardHeader>
                <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
                {portfolioData.experience.map((item) => (
                    <div key={item.role} className="grid gap-1">
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold">{item.role}</h3>
                            <span className="text-sm text-muted-foreground">{item.period}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.company}</p>
                        <p className="text-sm">{item.description}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
