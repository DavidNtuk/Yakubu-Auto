import React from "react";
import {
    BrowserRouter as Router,
    Routes,Route
  } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Showcase from "./Pages/Showcase";

const layout = () => {
    return(
        <Router>
            <Navbar />
            <Routes>
                {/* General Route */}
                <Route path="/" element={<Showcase />}/>
            </Routes>
            <Footer />
        </Router>
    )
}

export default layout