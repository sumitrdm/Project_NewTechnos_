import React from 'react';
import './HeroSection.css';
import Button from '@material-ui/core/Button';


function HeroSection() {
  return (
    
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>LEARN  NEW THINGS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
      
      <Button variant="outlined">
      GET STARTED
      </Button>
      </div>
    </div>
  );
}

export default HeroSection;
