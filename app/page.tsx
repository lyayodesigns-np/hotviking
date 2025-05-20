"use client"

import HeroGeometric from "../components/kokonutui/hero-geometric"
import HowWeHelp from "../components/sections/how-we-help"
import ServicePackages from "../components/sections/service-packages"
import DeliverablesComparison from "../components/sections/deliverables-comparison"

export default function Page() {
  return (
    <main>
      <HeroGeometric />
      <HowWeHelp />
      <ServicePackages />
      <DeliverablesComparison />
    </main>
  )
}
