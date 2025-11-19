"use client"

import { portfolioData } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ProfileCardProps extends React.HTMLAttributes<HTMLDivElement> { }

export function ProfileCard({ className, ...props }: ProfileCardProps) {
    return (
        <Card className={cn("flex flex-col justify-between", className)} {...props}>
            <CardHeader>
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center text-4xl mb-4">
                    👨‍💻
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold">
                    {portfolioData.personal.name}
                </CardTitle>
                <p className="text-lg text-muted-foreground font-medium">
                    {portfolioData.personal.headline}
                </p>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                    {portfolioData.personal.bio}
                </p>
                <div className="flex gap-2">
                    <Link href={portfolioData.personal.email}>
                        <Button>
                            <Mail className="mr-2 h-4 w-4" /> Contact Me
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
