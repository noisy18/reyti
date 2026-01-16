import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { Features } from "@/components/features"
import { Audience } from "@/components/audience"
import { HowItWorks } from "@/components/how-it-works"
import { Technologies } from "@/components/technologies"
import { Roadmap } from "@/components/roadmap"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Audience />
        <HowItWorks />
        <Technologies />
        <Roadmap />
      </main>
      <Footer />
    </>
  )
}
