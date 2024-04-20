/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Device from "./Device";
import { Link } from "react-router-dom";
import "./Descript.css";
import "./Device.css"
const Descript = () => {
  return (
    <div className="descript">
      <div className="midContainer">
        <div className="innerContainer">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="text-container"
          >
            <h3 className="heading">The ultimate study app</h3>
            <p className="desc">
              The Study Buddy student planner helps you keep track of all your
              classes, tasks, assignments and exams – anywhere, on any device.
            </p>
            <p className="desc">
              Whether you’re in middle school, high school or college Study
              Buddy online school agenda will organize your educational life for
              you for less stress, more productivity, and ultimately, better
              grades.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="img-container"
          >
            <img className="descImg" src="desc-img.png" />
          </motion.div>
        </div>
      </div>
      <div className="device">
      <div className="innerContents">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }} className="devImg">
          <img className="deviceImg" src="devicefin.png" alt="" />
        </motion.div>
        <motion.div  variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4}}  className="textcontainer">
          <div className="heading">
            <h3>Stay on track on all of your devices</h3>
          </div>
          <div className="para">
            <p>
              Experience an immersive experience with our responsive website.
            </p>
          </div>
        </motion.div>
      </div>
      {/* <Link to="/Todolist">
      <button className="cssbuttons-io-button">
        Get started
        <div className="icon">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </button>
      </Link> */}
    </div>
    </div>
  );
};

export default Descript;
