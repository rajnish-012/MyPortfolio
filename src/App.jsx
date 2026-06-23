import React, { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Only below-the-fold sections are lazy loaded
const About      = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Education  = lazy(() => import('./components/Education'))
const Skills     = lazy(() => import('./components/Skills'))
const Projects   = lazy(() => import('./components/Projects'))
const Contact    = lazy(() => import('./components/Contact'))
const Footer     = lazy(() => import('./components/Footer'))

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        {/* Hero loads immediately — no spinner, no layout shift */}
        <Hero />

        {/* Single suspense boundary — no visible spinner, sections appear naturally */}
        <Suspense fallback={null}>
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App