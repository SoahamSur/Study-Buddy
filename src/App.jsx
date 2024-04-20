/* eslint-disable no-unused-vars */
import {createBrowserRouter, RouterProvider,BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import Pomodoro from "./Components/Pomodoro";
import Flashcards from "./Components/Flashcards";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Features from "./Components/Features";
import Descript from "./Components/Descript";
import Todolist from './Components/Todolist';
import Task from "./Components/Task";
import Footer from "./Components/Footer";
import Creators from "./Components/Creators";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><LandingPage /></>
    },
    {
      path: "/LandingPage",
      element: <><Navbar /><LandingPage /></>
    },
    {
      path: "/Features",
      element: <><Navbar /><Features /></>
    },
    {
      path: "/Descript",
      element: <><Navbar /><Descript /></>
    },
    {
      path: "/Pomodoro",
      element: <><Navbar /><Pomodoro /></>
    },
    {
      path: "/Todolist",
      element: <><Navbar /><Todolist /></>
    },
    {
      path: "/Flashcards",
      element: <><Navbar /><Flashcards /></>
    },
    {
      path:"/Creators",
      element:<><Navbar/><Creators/></>
    },
    {
      path:"/Task",
      element:<> <Navbar/><Task/></>
    }
  ])
  return (
    <>
    <RouterProvider router={router} />

      {/* <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/LandingPage" element={<LandingPage />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Features" element={<Features />}></Route>
        <Route path="/Pomodoro" element={<Pomodoro />}></Route>
        <Route path="/Flashcards" element={<Flashcards />}></Route>
        <Route path="/Todolist" element={<Todolist/>}></Route>
        <Route path="/Descript" element={<Descript />}></Route>
        <Route path="/Footer" element={<Footer />}></Route>
      </Routes> */}
    </>
  );
}

export default App;
