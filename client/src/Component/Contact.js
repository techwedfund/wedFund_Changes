import React from "react";
import '../Style/Contact.css';
import { Link } from "react-router-dom";
import Rectangle from '../Images/Rectangle 1.png';

const Contact = () => {

    return (
        <>
            <div id="carouselExample" className="carousel slide" data-interval="1000" data-bs-ride="carousel" data-bs-wrap="true">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Rectangle} className="d-block w-img w-100 imgZindex bg-fit" alt="photo1" />
                    </div>
                    <div className="container contact-container">
                        <div className="row">
                            <div className="col-sm-6 stle">
                                <h4 className="text">Ready to Revolutionize<br />Your Business?</h4>
                                <br />
                                <h4>Avail the Power of B2B Financing in Your Business Growth</h4>
                                <h5 className="pt-4">100% Collateral Free
                                    <br />Lowest Cost on Trade Credit <br />Digital & Hassle Free Process</h5>
                                <br />
                                <br />
                                <Link to="https://www.lendingkart.com/business-loan/sme/Wedfund?lksrc=c3JjPVdlZGZ1bmQmdHlwZT1lY29tJnJlZmlkPVdlZGZ1bmQwMDE" className="btn btn-outline" style={{ background: "#6C0505", color: "#fff" }}>Apply for Credit</Link>
                            </div>
                            <div className="col-sm-6 custom-right-content">
                                <div className="card custom_card">
                                    <div className="card-body" style={{ borderRadius: "12px", boxShadow: "0px 0px 48px 2px rgba(0, 0, 0, 0.10)" }}>
                                        <p className="tnc">I hereby confirm that I have read, understood, and agree to the  “T&C”, <br /> “Terms of Use” and “Privacy Policy” and receive communication via SMS,<br /> email, mail and whatsapp</p>
                                        <Link type="submit" to="https://www.lendingkart.com/business-loan/sme/Wedfund?lksrc=c3JjPVdlZGZ1bmQmdHlwZT1lY29tJnJlZmlkPVdlZGZ1bmQwMDE" className="btn btn-lg btn-block btn-edit">Apply Now</Link>

                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-block btnTrack mt-3"> <Link to="https://www.lendingkart.com/dashboard/auth"> Track you application </Link></button>
                                        </div>
                                        <p style={{ fontSize: "0.6rem", marginBottom: '-0.8rem', color: '#000', textDecoration: 'none' }} className="mt-2 text-center">Already Applied? Click here to track your application</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;