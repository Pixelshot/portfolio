import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SplitSection } from "@/components/ui/split-section"
import { StackCard } from "@/components/bento/stack-card"
import { SocialCard } from "@/components/bento/social-card"
import { ExperienceCard } from "@/components/bento/experience-card"
import { Hero } from "@/components/sections/hero"
import { FeaturedProject } from "@/components/sections/featured-project"
import { portfolioData } from "@/lib/data"

async function getRepoData() {
  try {
    const res = await fetch('https://api.github.com/repos/Pixelshot/portfolio/commits?per_page=1', {
      next: { revalidate: 10 } // Revalidate every 10 seconds for faster updates
    })

    console.log('GitHub API Status:', res.status)

    if (!res.ok) {
      console.error('GitHub API Error:', res.status, res.statusText)
      return null
    }

    const commits = await res.json()
    if (!commits || commits.length === 0) {
      console.error('No commits found')
      return null
    }

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

    const result = {
      version: `1.${totalCommits}`,
      lastUpdated: diffDays === 0 ? "today" : `${diffDays} days ago`
    }

    console.log('Repo Data:', result)
    return result
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
      <main className="flex-1 container mx-auto p-4 md:p-8 space-y-24">
        <Hero version={version} lastUpdated={lastUpdated} />

        {/* Featured Projects - Catskills Style */}
        <section id="projects" className="scroll-mt-24">
          {/* Projects Header */}
          <div className="mb-16">
            <h2 className="text-[5rem] leading-[0.9] font-bold tracking-tight mb-4">
              Projects
              <sup className="text-sm font-normal ml-2 border rounded-full px-2 py-1 align-top top-4">2</sup>
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              A selection of engineering projects demonstrating full-stack capabilities, AI integration, and mobile development expertise.
            </p>
            <div className="w-full h-px bg-border mt-12 border-dashed" />
          </div>

          <div className="space-y-32">
            <FeaturedProject
              title="AI Trip Planner"
              description="A multi-agent AI travel assistant powered by content-based filtering and RAG. The system uses TF-IDF for semantic similarity matching and Ollama LLM for intelligent trip recommendations."
              galleryImages={[
                "/img/ai-trip-planner-v2.png",
                "/img/ai-trip-planner-form.png",
                "/img/ai-trip-planner-processing.png",
                "/img/ai-trip-planner-recommendations.png"
              ]}
              tags={["Next.js", "TypeScript", "Tailwind CSS", "Ollama", "RAG", "TF-IDF", "AI Agents"]}
              liveUrl="https://www.g1-ai-trip-planner.dev/"
            />

            <FeaturedProject
              title="Flighty MY"
              description="A React Native flight tracking app built with Expo and NativeWind. Features real-time flight status, dark mode support, and a beautiful, native-feeling UI."
              galleryImages={[
                "/img/flighty-light.png",
                "/img/flighty-dark.png"
              ]}
              tags={["React Native", "Expo", "TypeScript", "NativeWind", "Mobile"]}
              liveUrl="https://github.com/Pixelshot/flighty-my"
            />
          </div>
        </section>

        {/* Contributions - Split Layout List */}
        <section id="contributions" className="space-y-24 scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-[5rem] leading-[0.9] font-bold tracking-tight mb-4">
              Contributions
              <sup className="text-sm font-normal ml-2 border rounded-full px-2 py-1 align-top top-4">
                {portfolioData.projects.length}
              </sup>
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Some of the contributions I've made throughout my professional career.
            </p>
            <div className="w-full h-px bg-border mt-12 border-dashed" />
          </div>

          {portfolioData.projects.map((project, index) => (
            <SplitSection
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              linkLabel={project.linkLabel || "View Contribution"}
              badge="CONTRIBUTION"
              galleryImages={project.galleryImages}
              galleryLayout={project.galleryLayout as "stacked" | "side-by-side" | undefined}
              // Fallback image if no gallery
              image={!project.galleryImages ? (index % 2 === 0 ? "/img/ai-trip-planner-v2.png" : "/ai-trip-planner.png") : undefined}
            />
          ))}
        </section>

        {/* Experience - Single Split Section */}
        <section id="experience" className="scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-[5rem] leading-[0.9] font-bold tracking-tight mb-4">
              Experience
            </h2>
            <div className="w-full h-px bg-border mt-12 border-dashed" />
          </div>

          <SplitSection
            title="Career History"
            description="A timeline of my educational and professional milestones."
            badge="RESUME"
          >
            <ExperienceCard />
          </SplitSection>
        </section>

        {/* Stack & Socials */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <StackCard />
          <div className="grid grid-cols-2 gap-4">
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
              label="LinkedIn"
              href={portfolioData.personal.socials[2].url}
              className="col-span-1"
            >
              {(() => {
                const Icon = portfolioData.personal.socials[2].icon
                return <Icon className="h-8 w-8" />
              })()}
            </SocialCard>
          </div>
        </section>
      </main>
      <div id="contact" className="scroll-mt-24">
        <Footer />
      </div>
    </div>
  )
}
