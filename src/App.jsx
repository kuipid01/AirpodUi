/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import { useEffect, useRef, useState } from "react";
import Header from "./Components/Header/Haeder";
import "./App.scss";
import Button from "./Components/Button/Button";
import {gsap ,Power4} from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

 gsap.registerPlugin(ScrollTrigger);
function App() {
 
const softImage = useRef()
const textOveflow = useRef()
const textLay = useRef()
const footerRef = useRef()
const footerRef1 = useRef()
const footerRef2 = useRef()

function animateElement({
  ref,
  duration,
  delay,
  endRef,
}) {
  gsap.to(ref.current, {
    opacity: 1,
    duration,
    ease: "power4.inOut",
    delay,
    scale: 1,
    scrollTrigger: {
      trigger: endRef.current,
    },
  });
}

useEffect(() => {
  animateElement({ref:softImage,duration:1.5,delay:0,endRef:softImage})
  animateElement({ref:textOveflow,duration:1,delay:1,endRef:softImage})
  animateElement({ref:textLay,duration:1,delay:1.5,endRef:softImage})
  animateElement({ref:footerRef1,duration:1,delay:.5,endRef:footerRef})
  animateElement({ref:footerRef2,duration:1,delay:1,endRef:footerRef})

  

}, [])
  return (
    <>
     
        
          <div className="app">
            <Header />
            <section  className="epiphanyContainer">
              <div className="container">
                <p ref={textOveflow} className="epip">
                  Sounds Like <br /> an epiphany
                </p>
              <div ref={softImage} className="left">
                  <img src="/images/model.png" alt="" />
                </div>
                <div className="right">
                  <p ref={textLay} className="text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto est natus expedita ratione accusamus hic modi,
                    animi totam at saepe adipisci quasi quis minus fugit eaque
                    repellat tenetur temporibus minima.
                  </p>
                  <button className="roundedPill">
                    <img src="/images/arr.svg" alt="" className="svg" />
                  </button>
                </div>
              </div>
            </section>
            <section ref={footerRef} className="magicalContainer">
              <div className="container">
                <div className="right">
                  <p ref={footerRef1} className="textHeader">
                    Magical <br /> Experience
                  </p>
                  <p  ref={footerRef2}  className="text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto est natus expedita ratione accusamus hic modi,
                    animi totam at saepe adipisci quasi quis minus fugit eaque
                    repellat tenetur temporibus minima.
                  </p>
                  <Button text="Read More" />
                </div>
              </div>
              <img
                className="lastImage rotate-z"
                src="/images/lastMage.png"
                alt=""
              />
            </section>
          </div>
      
    </>
  );
}

export default App;
