import React from "react";
import Button from "./Button";
import "../App.css"


const Slider = () => {
   return(
    <>
        <div className="overlay"></div>     
        <div className="slide-image">
        </div>
            <div className="slide-text d-flex flex-column text-center">
                <h2 className="pb-2">Buy Your Used Or New Car</h2>
                <h6  className="pb-4" >We have more than a thousand cars for you to choosee...</h6>
                <div className="">
                    <Button 
                    title="Read more..." />
                </div>
            </div>
    </>
   )
}

export default Slider