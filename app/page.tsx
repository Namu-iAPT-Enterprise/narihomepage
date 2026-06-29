import { Suspense } from 'react'
import GSAPAnimations from '@/components/GSAPAnimations'
import MolangNav from '@/components/molang/MolangNav'
import HeroSection from '@/components/molang/HeroSection'
import StatementSection from '@/components/molang/AboutSection'
import ServicesSection from '@/components/molang/ServicesSection'
import PortfolioTeaser from '@/components/molang/PortfolioTeaser'
import PromiseSection from '@/components/molang/PromiseSection'
import AdVideoShowcase from '@/components/molang/AdVideoShowcase'
import PartnerMarquee from '@/components/molang/MarqueeTicker'
import ContactSection from '@/components/molang/ContactSection'
import MolangFooter from '@/components/molang/MolangFooter'

export default function Home() {
  return (
    <div style={{ background: '#FFFDF0', color: '#1A1A1A', position: 'relative', overflowX: 'hidden' }}>
      {/* Grain texture overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 60,
          pointerEvents: 'none',
          mixBlendMode: 'multiply',
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <GSAPAnimations />
      <MolangNav />
      <HeroSection />
      <StatementSection />
      <ServicesSection />
      <PortfolioTeaser />
      <PromiseSection />
      <AdVideoShowcase />
      <PartnerMarquee />
      <Suspense
        fallback={
          <div style={{ height: '600px', background: '#FFFDF0' }} />
        }
      >
        <ContactSection />
      </Suspense>
      <MolangFooter />
    </div>
  )
}
