"use client"

import HeroGeometric from "../components/kokonutui/hero-geometric"
import HowWeHelp from "../components/sections/how-we-help"
import SnapshotPromo from "../components/sections/snapshot-promo"
import ServicePackages from "../components/sections/service-packages"
import Plans from "../components/sections/plans"
import DeliverablesComparison from "../components/sections/deliverables-comparison"
import IndustryInsights from "../components/sections/industry-insights"
import InsightMethod from "../components/sections/insight-method"
import WhyPowerBI from "../components/sections/why-power-bi"
import ClientOnboarding from "../components/sections/client-onboarding"
import AboutFounder from "../components/sections/about-founder"
import Testimonials from "../components/sections/testimonials"
import BottomCTA from "../components/sections/bottom-cta"

export default function Page() {
  return (
    <main>
      <HeroGeometric />
      <SnapshotPromo />   
      <ServicePackages />
      <InsightMethod /> 
      <BottomCTA />
    </main>
  )
}
