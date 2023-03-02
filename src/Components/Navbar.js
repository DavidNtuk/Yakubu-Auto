import React from 'react';
import "../App.css"


const Navbar = () => {
    return(
        <>
            <div class="container-fluid position-relative nav-bar p-0">
                <div class="position-relative z-index">
                    <nav class="navbar navbar-expand-lg navbar-color navbar-dark py-3 py-lg-0 pl-3 pl-lg-5 row">
                        <a href="" class="navbar-brand col-6 flex-end px-5">
                            <h1 class="text-uppercase text-color mb-1">Yakz Auto</h1>
                        </a>
                        <button type="button" class="navbar-toggler col-2 px-4" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between px-3 col-6" id="navbarCollapse">
                            <div class="navbar-nav ml-auto py-0">
                                <a href="index.html" class="nav-item nav-link active">Home</a>
                                <a href="about.html" class="nav-item nav-link">About</a>
                                <a href="service.html" class="nav-item nav-link">Service</a>
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link">Cars</a>
                                </div>
                                <a href="contact.html" class="nav-item nav-link">Contact</a>
                            </div>
                        </div>
                    </nav>
                </div>
             </div>
        </>
    )
}

export default Navbar