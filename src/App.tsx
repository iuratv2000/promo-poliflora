import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Story } from '@/components/sections/Story'
import { Offer } from '@/components/sections/Offer'
import { Trust } from '@/components/sections/Trust'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Story />
        <Offer />
        <Trust />
      </main>
      <Footer />
    </div>
  )
}

export default App
