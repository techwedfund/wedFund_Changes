import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Contact'
import '../Style/How.css'

const How = ({ inputRefName }) => {

    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    }, [location]);

    const hanldeClick = () => {
        if (location.pathname === '/how-it-works') {
            window.location.pathname = '/'
        }
        else {
                window.scrollTo(0,0);
        }
    }

    return (
        <>
            {/* How it works section start  */}
            <div className="container mt-5 how">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 style={{ fontFamily: "Montserrat", fontWeight: "600" }} className="mt-3 wrk d-flex justify-content-left">How it <span style={{ color: "#6C0505" }}> &nbsp;Works</span></h2>
                        <div className="info-timeline howWork">
                            <div className="d-flex gap-2 mt-4">
                                <div className="circle1">1</div>
                                <div>
                                    <div className="headerfirst">Request for Credit Line</div>
                                    <div className="headerfirst1">Apply and get a call back*</div>
                                </div>
                            </div>
                            <div className="d-flex gap-2 mt-3 ">
                                <div className="circle1">2</div>
                                <div>
                                    <div className="headerfirst">KYC</div>
                                    <div className="headerfirst1">Upload all the required documentation for verification</div>
                                </div>
                            </div>
                            <div className="d-flex mt-3 gap-2">
                                <div className="circle1">3</div>
                                <div>
                                    <div className="headerfirst">Get your Loan Offer</div>
                                    <div className="headerfirst1">Avail a tailored offer specifying credit line amount, interest rates, and repayment terms</div>
                                </div>
                            </div>
                            <div className="d-flex gap-2 mt-3 ">
                                <div className="circle1">4</div>
                                <div>
                                    <div className="headerfirst">Agreement & Onboarding</div>
                                    <div className="headerfirst1">Sign the agreement and complete the onboarding process</div>
                                </div>
                            </div>
                            <div className="d-flex gap-2 mt-3 mb-5 ">
                                <div className="circle1">5</div>
                                <div>
                                    <div className="headerfirst">Grow Your Business</div>
                                    <div className="headerfirst1">Access funds as per your business needs</div>
                                </div>
                            </div>

                            <div>
                                <p id="howPara">*Don’t worry, we don’t spam our customers </p>
                            </div>

                            <button onClick={hanldeClick} className="btn btn-outline mb-5 applyCredit" style={{ background: "#6C0505", color: "#fff" }}>Apply for Credit</button>
                        </div>

                        <div className="col-md-5 info-timeline">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default How;