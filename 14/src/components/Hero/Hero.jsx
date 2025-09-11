import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='Hero container'>
        <div className="Hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
            <button className="Hero-button">Explore More <img src={arrow} alt="arrow" /></button>
        </div>
    </div>
  )
}

export default Hero
