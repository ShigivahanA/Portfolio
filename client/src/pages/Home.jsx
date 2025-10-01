import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Certificates from '../components/Certificates'
import { Helmet } from "react-helmet-async";


const Home = () => {
  return (
<>
<Helmet>
  <title>Portfolio | Shigivahan Athithan</title>
  <meta name="description" content="Personal portfolio of Shigivahan Athithan - Full Stack Developer & Data Analyst. Showcasing projects, certifications, and contact info." />
  <link rel="canonical" href="https://yourdomain.com/" />
</Helmet>
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
