import React from "react";
import CarCardItem from "./CarCarditem";
import "../App.css"


const CarCard = () => {
   return(
    <>
        <h2 className="display-4 text-uppercase text-center mb-5 pt-4">Find Your Car</h2>
        <div>
            <CarCardItem />
        </div>
    </>
   )
}

export default CarCard