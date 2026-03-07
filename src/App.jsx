import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import "./variables.css"

function App() {

  return (
    <div className="app-container min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
