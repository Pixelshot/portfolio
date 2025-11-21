"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TypewriterProps {
    text: string
    start?: boolean
    onComplete?: () => void
    showCursor?: boolean
    className?: string
    speed?: number
}

export function Typewriter({
    text,
    start = true,
    onComplete,
    showCursor = true,
    className = "",
    speed = 50
}: TypewriterProps) {
    const [visibleCount, setVisibleCount] = useState(0)
    const [hasCompleted, setHasCompleted] = useState(false)

    useEffect(() => {
        if (!start) return

        if (visibleCount < text.length) {
            const timeout = setTimeout(() => {
                setVisibleCount(prev => prev + 1)
            }, speed)

            return () => clearTimeout(timeout)
        } else if (!hasCompleted) {
            setHasCompleted(true)
            onComplete?.()
        }
    }, [start, visibleCount, text.length, speed, onComplete, hasCompleted])

    return (
        <span className={className}>
            {text.slice(0, visibleCount)}
            {showCursor && (
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="inline-block ml-[1px] w-[0.5em] h-[1em] bg-[#AAC4F5] dark:bg-primary align-text-bottom"
                />
            )}
        </span>
    )
}
