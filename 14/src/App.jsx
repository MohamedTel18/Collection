import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Title subTitle="What We Offer" title="OUR Programs" />
        <Programs />
        <About />
        <Title subTitle="Campus Photos" title="Gallery" />
        <Campus />
        <Title subTitle="What Student Says" title="TESTIMONIALS" />
        <Testimonials />
      </div>
    </div>
  )
}

export default App
