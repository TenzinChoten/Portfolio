import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Experience from './components/experience'
import Projects from './components/projects'
import Contact from './components/contact'

function App() {
  return (
    <div className="relative min-h-svh overflow-x-hidden bg-page">
      <Navbar />
      <main className="relative" id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        {/* [Reason] Footer lives inside Contact so #contact scroll shows both */}
        <Contact />
      </main>
    </div>
  )
}

export default App
