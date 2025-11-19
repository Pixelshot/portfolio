import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { StackCard } from "@/components/bento/stack-card"
import { ContributionCard } from "@/components/bento/contribution-card"
import { SocialCard } from "@/components/bento/social-card"
import { ExperienceCard } from "@/components/bento/experience-card"
import { Hero } from "@/components/sections/hero"
import { portfolioData } from "@/lib/data"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-8">
        <Hero />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)] mb-12">
          {/* Socials - Small (1x1) */}
          <SocialCard
            label="GitHub"
            href={portfolioData.personal.socials[0].url}
            className="col-span-1"
          >
            {(() => {
              const Icon = portfolioData.personal.socials[0].icon
              return <Icon className="h-8 w-8" />
            })()}
          </SocialCard>
          <SocialCard
            label="Twitter"
            href={portfolioData.personal.socials[2].url}
            className="col-span-1"
          >
            {(() => {
              const Icon = portfolioData.personal.socials[2].icon
              return <Icon className="h-8 w-8" />
            })()}
          </SocialCard>

          {/* Stack - Medium (2x1) */}
          <StackCard className="col-span-1 md:col-span-2" />
        </div>

        {/* Contributions Section */}
        <div className="my-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-foreground">Contributions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.projects.map((project) => (
              <ContributionCard
                key={project.title}
                project={project}
                className="h-full"
              />
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <ExperienceCard />
        </div>
      </main>
      <Footer />
    </div>
  )
}
