// src/pages/Home.tsx

import Hero from '../components/Hero'
import FeaturedCollection from '../components/FeaturedCollection'
import UpcomingExhibition from '../components/UpcomingExhibition'
import PressPublications from '../components/FeaturedEssay'
import ShopGrid from '../components/ShopGrid'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="bg-warm-white">
      <div className="lg:h-[100dvh] lg:min-h-[676px] lg:overflow-hidden">
        <Hero />
      </div>

      <FeaturedCollection />
      <UpcomingExhibition />
      {/* <Studio /> */}
      <PressPublications />
      <ShopGrid />
      <Newsletter />
      <Footer />
    </main>
  )
}