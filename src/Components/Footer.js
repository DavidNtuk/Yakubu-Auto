import React from "react";
import image1 from "../img/Benz1.jfif";
import "../App.css";


const Footer = () => {
   return(
    <>
        <div class="container-fluid footer-color py-5 px-sm-3 px-md-5"  >
            <div class="row pt-5">
                <div class="col-lg-3 col-md-6 mb-5">
                    <h4 class="text-uppercase text-light mb-4">Get In Touch</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt text-white mr-3 px-2"></i>123 Street, New York, USA</p>
                    <p class="mb-2"><i class="fa fa-phone-alt text-white mr-3 px-2"></i>+012 345 67890</p>
                    <p><i class="fa fa-envelope text-white mr-3 px-2"></i>info@example.com</p>
                    <h6 class="text-uppercase text-white py-2">Follow Us</h6>
                    <div class="d-flex justify-content-start">
                        <a class="btn btn-lg btn-dark btn-lg-square mr-2" href="#"><i class="fab fa-twitter px-2"></i></a>
                        <a class="btn btn-lg btn-dark btn-lg-square mr-2" href="#"><i class="fab fa-facebook-f px-2"></i></a>
                        <a class="btn btn-lg btn-dark btn-lg-square mr-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-lg btn-dark btn-lg-square" href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                {/* <div class="col-lg-3 col-md-6 mb-5">
                    <h4 class="text-uppercase text-light mb-4">Car Gallery</h4>
                    <div class="row mx-n1">
                        <div class="col-4 px-1 mb-2">
                            <a href=""><img class="w-100" src="img/gallery-1.jpg" alt=""></a>
                        </div>
                        <div class="col-4 px-1 mb-2">
                            <a href=""><img class="w-100" src="img/gallery-2.jpg" alt=""></a>
                        </div>
                        <div class="col-4 px-1 mb-2">
                            <a href=""><img class="w-100" src="img/gallery-3.jpg" alt=""></a>
                        </div>
                        <div class="col-4 px-1 mb-2">
                            <a href=""><img class="w-100" src="img/gallery-4.jpg" alt=""></a>
                        </div>
                        <div class="col-4 px-1 mb-2">
                            <a href=""><img class="w-100" src="img/gallery-5.jpg" alt=""></a>
                        </div>
                        <div class="col-4 px-1 mb-2">
                            <a href=""><img class="w-100" src="img/gallery-6.jpg" alt=""></a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </>
   )
}

export default Footer