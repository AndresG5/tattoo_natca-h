import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Artists from './components/Artists'
import Styles from './components/Styles'
import Process from './components/Process'
import Booking from './components/Booking'
import ContactForm from './components/ContactForm'
import Location from './components/Location'
import Socials from './components/Socials'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-ink">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Artists />
      <Styles />
      <Process />
      <Booking />
      <ContactForm />
      <Location />
      <Socials />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
