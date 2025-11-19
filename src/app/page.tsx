import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { StackCard } from "@/components/bento/stack-card"
import { ContributionCard } from "@/components/bento/contribution-card"
import { SocialCard } from "@/components/bento/social-card"
import { ExperienceCard } from "@/components/bento/experience-card"
import { Hero } from "@/components/sections/hero"
import { FeaturedProject } from "@/components/sections/featured-project"
import { portfolioData } from "@/lib/data"

async function getRepoData() {
  try {
    const res = await fetch('https://api.github.com/repos/Pixelshot/portfolio/commits?per_page=1', {
      next: { revalidate: 60 } // Revalidate every minute for demo purposes, or 3600 for prod
    })

    if (!res.ok) return null

    const commits = await res.json()
    if (!commits || commits.length === 0) return null

    const latestCommitDate = new Date(commits[0].commit.author.date)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - latestCommitDate.getTime())
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    // Get total count from Link header
    const linkHeader = res.headers.get('link')
    let totalCommits = 1
    if (linkHeader) {
      const lastMatch = linkHeader.match(/&page=(\d+)>; rel="last"/)
      if (lastMatch) {
        totalCommits = parseInt(lastMatch[1])
      }
    }

    return {
      version: `1.${totalCommits}`,
      lastUpdated: diffDays === 0 ? "today" : `${diffDays} days ago`
    }
  } catch (error) {
    console.error("Error fetching repo data:", error)
    return null
  }
}

export default async function Home() {
  const repoData = await getRepoData()
  const version = repoData?.version || "1.0"
  const lastUpdated = repoData?.lastUpdated || "recently"

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-8">
        <Hero version={version} lastUpdated={lastUpdated} />

        {/* Projects Section */}
        <div className="my-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-foreground">Projects</h2>
          </div>
          <FeaturedProject
            title="AI Trip Planner"
            description="A multi-agent AI travel assistant powered by content-based filtering and RAG (Retrieval-Augmented Generation). The system uses TF-IDF for semantic similarity matching and Ollama LLM for intelligent trip recommendations, helping users discover their perfect travel destination through conversational AI."
            image="/ai-trip-planner.png"
            tags={["Next.js", "TypeScript", "Tailwind CSS", "Ollama", "RAG", "TF-IDF", "AI Agents"]}
            liveUrl="https://www.g1-ai-trip-planner.dev/"
          />
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
      </main>
      <Footer />
    </div>
  )
}
