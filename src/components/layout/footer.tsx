import { portfolioData } from "@/lib/data"

export function Footer() {
    return (
        <footer className="bg-muted dark:bg-[#F6B17A] text-foreground dark:text-[#2D3250] py-12 px-4 md:px-8 mt-24 transition-colors duration-300">
            <div className="container mx-auto flex flex-col h-full min-h-[400px] justify-between">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    {/* Location / Time */}
                    <div className="flex gap-8 text-xs font-mono tracking-wider">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-foreground dark:bg-[#2D3250]" />
                            <div className="flex flex-col">
                                <span>{new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'Asia/Kuala_Lumpur', timeZoneName: 'short' })}</span>
                                <span>KUALA LUMPUR</span>
                                <span>MALAYSIA</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex gap-8 text-lg font-medium">
                        <a href="#projects" className="hover:opacity-70 transition-opacity">Projects</a>
                        <a href="#contributions" className="hover:opacity-70 transition-opacity">Contributions</a>
                        <a href="#experience" className="hover:opacity-70 transition-opacity">Experience</a>
                        <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
                    </nav>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-t border-border dark:border-[#2D3250]/20 pt-8">
                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">Pixelshot</h1>
                        <div className="flex flex-col text-sm font-mono leading-tight max-w-xs">
                            <span>A SOFTWARE ENGINEER</span>
                            <span>WORKING IN THE</span>
                            <span>CYBER SECURITY SPACE</span>
                        </div>
                    </div>

                    {/* Copyright / Graphic */}
                    <div className="flex flex-col items-end gap-4">
                        {/* Abstract Graphic Placeholder */}
                        {/* <div className="w-24 h-24 border border-[#E5E5E0]/30 dark:border-[#2D3250]/30 transform rotate-45 mb-4 hidden md:block" /> */}
                        <span className="text-sm text-muted-foreground dark:text-[#2D3250]/60">
                            © {new Date().getFullYear()} Pixelshot
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
