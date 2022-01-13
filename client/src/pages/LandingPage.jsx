import React from 'react';
import { Link } from 'react-router-dom';
//import logo from '../assets/Breaking_Bad_logo.png';
import molecule from '../assets/bullet.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

export default function LandingPage() {
    return (
      <div className='landingContent'>
        {/* <img className='landingIcon1' src={molecule} alt="line" />
        <img className='landingIcon2' src={molecule} alt="line" /> */}
        <h1 className="landingTitle">VIDEOGAMES</h1>
        {/* <img className='landingIcon3' src={molecule} alt="line" />
        <img className='landingIcon4' src={molecule} alt="line" /> */}
        <Link to='/home'>
          <button className='landingButton'>
            <span>Press Start</span>
          </button>
        </Link>
        <div className='landingPresContent'>
          <a href="https://github.com/AlmafuerteAriel/" target="blank"><img className='landingPresIcon' src={github} alt="github" /></a>
          <a href="https://www.linkedin.com/in/ariel-alejandro-romero-14a43020b/" target="blank"><img className='landingPresIcon'src={linkedin} alt="linkedin" /></a>
        </div>
        {/* <img className='landingIcon5' src={molecule} alt="line" /> */}
      </div>
    )
  }