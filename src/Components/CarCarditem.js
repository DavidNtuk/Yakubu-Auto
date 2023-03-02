import React from "react";
import image1 from "../img/Benz1.jfif";
import "../App.css";


const CarCardItem = () => {
   return(
    <>
        <div class="container-fluid py-5">
            <div class="container pt-5 pb-3">
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-2">
                        <div class="rent-item mb-4">
                            <img class="img-fluid" src={image1} alt=""/>
                            <h4 class="text-uppercase mb-4 pt-3">Mercedes Benz R3</h4>
                            <div class="d-flex justify-content-center mb-4">
                                <div class="px-2">
                                    <i class="fa fa-car text-primary mr-1 px-1"></i>
                                    <span>2015</span>
                                </div>
                                <div class="px-2 border-left border-right">
                                    <i class="fa fa-cogs text-primary mr-1 px-1"></i>
                                    <span>AUTO</span>
                                </div>
                                <div class="px-2">
                                    <i class="fa fa-road text-primary mr-1 px-1"></i>
                                    <span>25K</span>
                                </div>
                            </div>
                            <div className="pb-5">
                                <a 
                                    class="btn btn-primary px-3" 
                                    href="">Buy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
   )
}

export default CarCardItem