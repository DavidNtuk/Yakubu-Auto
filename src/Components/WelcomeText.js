import React from "react";
import image1 from "../img/about.png"
import "../App.css"


const WelcomeText = () => {
   return(
    <>
        <div className="container welcome-text">
            <h1 class="display-4 text-uppercase text-center mb-5">Welcome To <span class="text-color">Yakz Auto</span></h1>
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-6 text-center">
                    <img class="mb-4" src={image1} alt="" />
                    <h5>Justo et eos et ut takimata sed sadipscing dolore lorem, et elitvoluptua no rebum sed, stet voluptua amet sed elitr ea dolor dolores no clita. Dolores diam magna clita ea eos amet, amet rebum voluptua vero vero sed clita accusam. </h5>
                </div>
            </div>
        </div>
    </>
   )
}

export default WelcomeText