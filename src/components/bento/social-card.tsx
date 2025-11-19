"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface SocialCardProps extends React.HTMLAttributes<HTMLDivElement> {
    href: string
    label: string
    children: React.ReactNode
}

export function SocialCard({ href, label, children, className, ...props }: SocialCardProps) {
    return (
        <Link href={href} target="_blank" className={cn("block h-full", className)}>
            <Card className="flex h-full flex-col items-center justify-center gap-4 p-6 hover:bg-muted/50 transition-colors" {...props}>
                {children}
                <span className="font-medium">{label}</span>
            </Card>
        </Link>
    )
}
