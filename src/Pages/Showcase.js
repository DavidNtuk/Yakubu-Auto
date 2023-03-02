import React from "react";
import Slider from "../Components/Slider";
import SearchBar from "../Components/SearchBar";
import WelcomeText from "../Components/WelcomeText";
import CarCard from "../Components/CarCard";
import Service from "../Components/Services";
import Contact from "../Components/Contact";


const Showcase = () => {
   return(
    <>
        <Slider />
        <SearchBar />
        <WelcomeText />
        <CarCard/>
        <Service/>
        <Contact/>
    </>
   )
}

export default Showcase