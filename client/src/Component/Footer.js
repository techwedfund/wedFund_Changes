import React from "react";
import logo from "../Images/completeLogo.png";
import '../Style/Footer.css'

const Footer = () => {

    return (
        <>
            <footer >
                <div className="container bottom_footer" style={{ paddingTop: "100px" }}>
                    <img src={logo} className="wedLogo" alt="simple" />
                    <div className="row mt-3 mb-4 pb-5">
                        <div className="col-md-6">
                            <div>
                            </div>
                            <p style={{ color: "#6c0505" }}>We at WedFund understand your business requirement for fast & flexible financing. Our platform can help your business get the funding you need quickly, easily & hassle free</p>
                            <p className="mt-5">Businesses are expecting a surge in sales during the wedding season. You can use WedFund to get credit to prepare your business for peak season without having to tie up you own cash.</p>
                        </div>
                        <div className="col-md-4 offset-md-1 careerBottom1">
                            <div className='emailSection mt-4'>
                                <p>EMAIL</p>
                                <h5 className='h5Edit'><i className="fa-regular fa-envelope"></i> &nbsp; team@wed.fund</h5>
                                <div className='border-career'></div>
                            </div>
                            <div className='phoneSection'>
                                <p>PHONE</p>
                                <h5 className='h5Edit'><i className="fa-solid fa-phone"></i>&nbsp; <span id="contactNo">+91 8595950140, +91 7209957963</span></h5>
                                <div className='border-career'></div>
                            </div>
                            <div className='socialSection'>
                                <p className='mb-4'>Follow Us</p>
                                <h5 className='h5Edit'><i className="fa-brands fa-facebook "></i><i className="fa-brands fa-x-twitter mx-3"></i><i className="fa-brands fa-instagram mx-2"></i></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;