import { Routes, Route } from "react-router-dom";

import Home from "./Home";

import About from "./About";

import Contact from "./Contact";

import Navbar from "./Navbar";

import Profile from "./Profile";
import BackButton from "./BackButton"

function App() {

  return (
    <>
    <Navbar/>
    

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />}>

        <Route path="about/contact" element={<Contact />} />

      </Route>
      <Route path="/profile" element={<Profile />}/>
    </Routes>
    </>

  );

}
export default App


