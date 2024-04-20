/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Typed from "typed.js";
import "./Home.css";
import Features from "../Components/Features";
import Descript from "../Components/Descript";
import Device from "../Components/Device";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
function TypingAnimation({ strings }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(elementRef.current, {
      strings: strings,
      typeSpeed: 50,
      loop: true, // enable looping
      backSpeed: 30, // speed backspacing
      backDelay: 1000, // delay before backspacing
      loopCount: Infinity, // infinite loop
    });
    elementRef.current.style.fontSize = "2.50rem";
    elementRef.current.style.color = "#64E9FF";
    elementRef.current.style.fontWeight = "#bold";
    return () => {
      // Clean up the Typed instance when component unmounts
      typed.destroy();
    };
  }, [strings]);

  return <span ref={elementRef}></span>;
}

TypingAnimation.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Home() {
  return (
    <div className="container">
      <motion.div 
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="leftsec">
        <h1>Your Time, Your Tasks,Your Triumph !!</h1>
        <span className="span-text">Manage your </span>
        <TypingAnimation
          strings={["Classes", "Tasks", " Exams"]}
          fontSize="2rem" 
          className="typing-animation"  // Pass className to TypingAnimation
        />
        <br />
        <Link to="/Features">
         <button id="btn-exp" className="Explore"> Explore</button>
         </Link>
      </motion.div>
      <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="rightsec">
    <img src="homesec.png" alt="" />
          </motion.div>
      
    </div>
  );
}

export default Home;
