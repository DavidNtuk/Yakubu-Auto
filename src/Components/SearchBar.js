import React from "react";
import Button from "./Button";
import "../App.css"


const SearchBar = () => {
   return(
    <div className="d-flex justify-content-center">
        <div className="search-bar">
            <div className="">
                <h2 className="pb-2 pt-2 px-5">Find Your Dream Car</h2>
                <div class="container-fluid pt-3 px-lg-5">
                    <div class="row mx-n2">
                        <div class="col-lg-4 col-md-6 px-2">
                            <label className="text-uppercase"><strong>Make</strong></label>
                            <select class="px-2 mb-3">
                                <option selected>Pickup Location</option>
                            </select>
                        </div>
                        <div class="col-lg-4 col-md-6 px-2">
                            <label className="text-uppercase"><strong>Model</strong></label>
                            <select class="custom-select px-2 mb-3" >
                                <option selected>Drop Location</option>
                            </select>
                        </div>
                        
                        <div class="col-lg-4 col-md-6 px-2">
                            <label className="text-uppercase"><strong>Year</strong></label>
                            <select class="custom-select px-2 mb-3">
                                <option selected>Select A Car</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="px-5 pt-2 pb-3">
                    <Button 
                    title="Search..." />
                </div>
            </div>
        </div>
    </div>
   )
}

export default SearchBar