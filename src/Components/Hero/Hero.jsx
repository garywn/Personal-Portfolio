import React from 'react'
import './Hero.css'
import profile_pic from '../../assets/profile-pic.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_pic} alt="Profile" />
      <h1><span>Hi! I'm Gary Wen,</span> Developer based in Dallas Texas.</h1>
      <p>I am a full-stack developer that specializes in building exceptional digital experiences.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">
          <a href="/Pei-he Resume 2025.pdf" target="_blank" rel="noopener noreferrer" >
             My Resume
           </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
