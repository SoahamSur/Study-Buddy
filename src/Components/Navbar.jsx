/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import {Link} from 'react-router-dom'
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const toggleDropdownVisibility = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const hideDropdown = () => {
    setIsDropdownVisible(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          <NavLink to="/"  className={`${styles.logo}`}>
            StudyBuddy
          </NavLink>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={hideDropdown}>
              <NavLink to="/LandingPage" className={`${styles.navLink}`}>
                Home
              </NavLink>
            </li>
            <li
              onMouseEnter={toggleDropdownVisibility}
              onMouseLeave={toggleDropdownVisibility}
            >
              <NavLink
              to=""
                className={`${styles.navLink} ${
                  isDropdownVisible ? styles.active : ""
                }`}
              >
                Features
                <span className={styles.dropdownArrow}>
                  <RiArrowDropDownLine />
                </span>
              </NavLink>
              <div
                className={`${styles.dropdownContent} ${
                  isDropdownVisible ? styles.visible : ""
                }`}
                onMouseEnter={toggleDropdownVisibility}
                onMouseLeave={toggleDropdownVisibility}
              >
                <ul>
                  <li className="dropdownText"><NavLink to="/Pomodoro" >Pomodoro Timer</NavLink></li>
                  <li className="dropdownText"><NavLink to="/Todolist" >Todo List</NavLink></li>
                  <li className="dropdownText"><NavLink to="/Task" >Task Scheduler</NavLink></li>
                  {/* <li className="dropdownText"><Link >Progress Tracker</Link></li> */}
                  {/* <li className="dropdownText"><Link >Focus Mode</Link></li> */}
                  <li className="dropdownText"><NavLink to="/Flashcards" >Flash Cards</NavLink></li>
                </ul>
              </div>
            </li>
            <li onClick={hideDropdown}>
              <NavLink to="/Descript"  className={`${styles.navLink}`}>
                About Us
              </NavLink>
            </li>
            <li onClick={hideDropdown}>
              <NavLink to="/Creators"  className={`${styles.navLink}`}>
                Creators
              </NavLink>
            </li>
          </ul>
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
