/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  RiPlayCircleLine,
  RiPauseCircleLine,
  RiRefreshLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import "./Pomodoro.css";

const Pomodoro = () => {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [minutes, setMinutes] = useState(workMinutes);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [session, setSession] = useState("Work");
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            new Audio("https://www.soundjay.com/button/beep-07.wav").play();
            if (session === "Work") {
              setSession("Break");
              setMinutes(breakMinutes);
            } else {
              setSession("Work");
              setMinutes(workMinutes);
            }
            setSeconds(0);
            setIsActive(false);
            return;
          } else {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prev) => prev - 1);
        }

        // Calculate progress
        const totalSeconds =
          session === "Work" ? workMinutes * 60 : breakMinutes * 60;
        const remainingSeconds = minutes * 60 + seconds;
        setProgress((remainingSeconds / totalSeconds) * 100);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, session, breakMinutes, workMinutes]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setMinutes(workMinutes);
    setSeconds(0);
    setIsActive(false);
    setSession("Work");
    setProgress(100);
  };

  const handleWorkChange = (e) => {
    const newWorkMinutes = Math.max(0, parseInt(e.target.value));
    setWorkMinutes(newWorkMinutes);
    if (session === "Work") {
      setMinutes(newWorkMinutes);
      setSeconds(0);
    }
  };

  const handleBreakChange = (e) => {
    const newBreakMinutes = Math.max(0, parseInt(e.target.value));
    setBreakMinutes(newBreakMinutes);
    if (session === "Break") {
      setMinutes(newBreakMinutes);
      setSeconds(0);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      resetTimer();
    }
  };

  return (
    <div className="pomo-body">
      <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.9 }}
        className={`pomodoro-container ${
          session === "Break" ? "break-mode" : ""
        }`}
      >
        <div className="title-pomodoro">
          <h2>POMODORO TIMER</h2>
        </div>
        <div className="progress-circle">
          <CircularProgressbar
            value={progress}
            text={`${minutes < 10 ? `0${minutes}` : minutes}:${
              seconds < 10 ? `0${seconds}` : seconds
            }`}
            strokeWidth={9}
            styles={buildStyles({
              textSize: "16px",
              textColor: "#ffffff",
              pathTransitionDuration: 0.5,
              pathColor: session === "Work" ? "#ff0000" : "#0FFF50",
              trailColor: "transparent", // Hides the trail
            })}
          />
        </div>
        <div className="time-inputs">
          <motion.label variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}>Work Time:</motion.label>
          <motion.input
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
            type="number"
            value={workMinutes}
            onChange={handleWorkChange}
            onKeyPress={handleKeyPress}
            min="0"
          />
          <motion.label variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}>Break Time:</motion.label>
          <motion.input 
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
            type="number"
            value={breakMinutes}
            onChange={handleBreakChange}
            onKeyPress={handleKeyPress}
            min="0"
          />
        </div>
        <div className="control-buttons">
          <button onClick={toggleTimer} className="start-button">
            {isActive ? <RiPauseCircleLine /> : <RiPlayCircleLine />}
          </button>
          <button onClick={resetTimer} className="reset-button">
            <RiRefreshLine />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Pomodoro;
