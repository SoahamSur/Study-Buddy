/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";
import "./Device.css";
const Device = () => {
  return (
    <div className="device">
      <div className="innerContents">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }} className="devImg">
          <img className="deviceImg" src="device.png" alt="" />
        </motion.div>
        <motion.div  variants={fadeIn("left", 0.3)}
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
    </div>
  );
};

export default Device;
