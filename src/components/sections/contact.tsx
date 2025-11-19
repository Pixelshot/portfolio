"use client"

import { portfolioData } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="container mx-auto py-8 md:py-12 lg:py-24 px-4 md:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Get in Touch</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground mb-8 text-lg">
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <Link href={portfolioData.personal.email}>
                <Button size="lg">
                    <Mail className="mr-2 h-4 w-4" /> Say Hello
                </Button>
            </Link>
        </section>
    )
}
