import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Certificates from "./components/Certificates"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


export default function App() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}