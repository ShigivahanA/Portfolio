import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Certificates from '../components/Certificates'


const Home = () => {
  return (
<>
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Certificates/>
      <Contact/>
      <Footer/>
      </div>
    </>
  )
}

export default Home
