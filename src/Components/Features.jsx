/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import "./Features.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Features = () => {
  return (
    <div className="container2">
      <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.9 }}
      className="desktopCards">
        <div className="myCard">
          <div className="innerCard">
            <div className="frontSide">
            <p className="title">Pomodoro Timer</p>
              
            </div>
            <div className="backSide">
          <p>
                Boost productivity with our Pomodoro Timer, a proven technique
                for focused work. Break tasks into manageable intervals,
                enhancing concentration and efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="myCard">
          <div className="innerCard">
            <div className="frontSide">
              <p className="title">Todo List</p>
            </div>
            <div className="backSide">
              <p>
                Organize your day seamlessly with our intuitive Todo List
                feature. Prioritize tasks, set deadlines, and stay on top of
                your goals effortlessly.
              </p>
            </div>
          </div>
        </div>
        <div className="myCard">
          <div className="innerCard">
            <div className="frontSide">
              <p className="title">Task Schedular</p>
            </div>
            <div className="backSide">
              <p>
                {" "}
                Never miss a deadline again with our Task Scheduler. Plan your
                day, week, or month ahead, and receive timely reminders to
                ensure nothing falls through the cracks.
              </p>
            </div>
          </div>
        </div>
        <div className="myCard">
          <div className="innerCard">
            <div className="frontSide">
              <p className="title">Flash Cards</p>
            </div>
            <div className="backSide">
              <p>
              Effortlessly memorize key concepts, equations, vocabulary, and more with interactive, customizable flashcards. 
              </p>
            </div>
          </div>
        </div>
        {/* <div className="myCard">
          <div className="innerCard">
            <div className="frontSide">
              <p className="title">Focus Mode</p>
            </div>
            <div className="backSide">
              <p>
                Maximize concentration by blocking out interruptions, allowing
                you to dive deep into your work and unleash your full potential.
              </p>
            </div>
          </div>
        </div> */}
      </motion.div>
      <div className="mobileCards">
        <motion.div 
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        className="card">
          <div className="header">
            <div className="img-box">
              
            </div>
            <span className="title">POMODORO TIMER</span>
          </div>
          <div className="content">
            <p>
            Boost productivity with our Pomodoro Timer, a proven technique
                for focused work.
            </p>
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="card">
          <div className="header">
            <div className="img-box">
              
            </div>
            <span className="title">Flash Cards</span>
          </div>
          <div className="content">
            <p>
            Effortlessly memorize key concepts,vocabulary, and more with customizable flashcards. 
            </p>
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}className="card">
          <div className="header">
            <div className="img-box">
              
            </div>
            <span className="title">Todo List</span>
          </div>
          <div className="content">
            <p>
            Organize your day seamlessly with our intuitive Todo List
                feature.
            </p>
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }} className="card">
          <div className="header">
            <div className="img-box">
              
            </div>
            <span className="title">Task Schedular</span>
          </div>
          <div className="content">
            <p>
            Never miss a deadline again with our Task Scheduler.
            </p>
          </div>
        </motion.div>
        {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="card">
          <div className="header">
            <div className="img-box">
              
            </div>
            <span className="title">Progress Tracker</span>
          </div>
          <div className="content">
            <p>
            Track your progress like a pro! Our Progress Tracker keeps you
                motivated
            </p>
          </div>
        </motion.div> */}
        {/* <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="card">
          <div className="header">
            <div className="img-box">
              
            </div>
            <span className="title">Focus Mode</span>
          </div>
          <div className="content">
            <p>
            Maximize concentration by blocking out interruptions & unleash your full potential.
            </p>
          </div>
        </motion.div> */}
      </div>
      {/* <div className="myCard">
        <div className="innerCard">
          <div className="frontSide">
            <p className="title">POMODORO TIMER</p>
          </div>
          <div className="backSide">
            <p>Lorem5</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Features;
