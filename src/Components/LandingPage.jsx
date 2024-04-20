/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../Components/Navbar';
import Home from "../Components/Home"
import Features from "../Components/Features";
import Descript from "../Components/Descript";
import Device from "../Components/Device";
import Footer from "../Components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Home/>
      <Features/>
      <Descript/>
      <Footer/>
    </div>
  )
}

export default LandingPage
