import Navbar from "./components/navbar/Navbar.jsx"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Educations from "./components/education/Educations"
import Skills from "./components/skills/Skills.jsx"
import Projects from "./components/projects/Projects.jsx"
import Contact from "./components/contact/Contact.jsx"
import Footer from "./components/footer/Footer.jsx"
import "./variables.css"

function App() {

  return (
    <div className="app-container min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Educations />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
