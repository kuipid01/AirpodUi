/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import "./header.scss";
import Button from "../Button/Button";
import { gsap, Power4 } from 'gsap';
const Haeder = () => {
  const textRef =useRef()
  const clippy =useRef()
  const smallTextRef =useRef()
  

  useEffect(() => {
    const timeline = gsap.timeline();
  
  //   // Add a simple tween to the timeline
    timeline.to(clippy.current, {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
 
      duration: 1.5, // Animation duration in seconds
      ease: 'power4.inOut', // Easing function
      y:0,
      opacity:1
    })
    .to(textRef.current, {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
 
      duration: 1, // Animation duration in seconds
      ease: 'power4.inOut', // Easing function
      y:0,
      
      opacity:1
    }, '-=.5')
    .to(smallTextRef.current, {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
 
      duration: 1, // Animation duration in seconds
      ease: 'power4.inOut', // Easing function
      y:0,
      
      opacity:1
    }, '-=.5')
  }, [])
  
  
    return (
    <div className="headerContainer">
      <nav className="navBar">
        <img src="/images/appleLogo.png" alt="" />
        <ul>
          <li>Products</li>
          <li>Prices</li>
          <li>Overview</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main className="mainContainer">
      <p className='bigTextAirPod'>
        Air<br />Pods <br /> Max
      </p>
        <div ref={clippy} className="imgontainer1">
          {/* <div  className="clippath"></div> */}
         <img src="/images/img4.png" alt="" /> 
        </div>
        
        <div className="textDesc">
          <p  ref={textRef} className="smallText">
            Air
            <br />
            Pods <br /> Max
          </p>
          <small ref={smallTextRef}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae laboriosam reprehenderit 
          </small>
         <Button text='Read More'/>
        </div>
          <div className="handleImgContainer">
        <img src="/public/images/handle.png" alt="" />
        </div>
      </main>
      
      
    </div>
  );
};

export default Haeder;
