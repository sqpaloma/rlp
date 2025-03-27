"use client"

import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import BenefitsSection from "@/components/benefits-section"
import ExcellenceSection from "@/components/ExcellenceSection"
import FAQSection from "@/components/FAQSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
        <HeroSection />
        <BenefitsSection />
        <ExcellenceSection />
        <FAQSection />
        <ContactSection />
      </main>
   
  )
}

