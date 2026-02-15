import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { OurServices } from "@/components/our-services"
import { HowWeWork } from "@/components/how-we-work"
import { WhyMorrison } from "@/components/why-morrison"
import { Certifications } from "@/components/certifications"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OurServices />
      <HowWeWork />
      <WhyMorrison />
      <Certifications />
      <CallToAction />
      <Footer />
    </main>
  )
}
