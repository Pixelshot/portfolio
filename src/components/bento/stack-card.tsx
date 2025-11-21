"use client"

import { portfolioData } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface StackCardProps extends React.HTMLAttributes<HTMLDivElement> { }

export function StackCard({ className, ...props }: StackCardProps) {
    return (
        <Card className={cn("flex flex-col", className)} {...props}>
            <CardHeader>
                <CardTitle className="text-[#7077A1] font-bold dark:text-foreground">Tech Stack</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {portfolioData.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm py-1 px-3 text-[#8174A0] dark:text-foreground">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
