import React from "react";
import '../Style/Footer.css';
import loan1 from "../Images/loan1.png";
import loan from "../Images/loan.png";
import loan2 from "../Images/loan2.png";

const Wedding = ({ inputRefName }) => {

    const handleClick = () => {
            window.scrollTo(0,0)
    }
    return (
        <>
            <div className="text-center text-dark mt-5" id="testimonials" style={{ background: "#F4EBEB" }}>
                <div className="container p-4">
                    <section className="mb-4">
                        <h2 className="text-start mt-5" style={{ fontFamily: "Montserrat", fontWeight: "600" }}>Do you need to finance your business</h2>
                        <p className="text-start mt-2" style={{ fontFamily: "Normal", fontWeight: "500", fontSize: "1.375rem" }}>Don’t let liquidity challenges hold you back from growing your business.</p>
                    </section>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        {/* <div className="col-lg-12"> */}
                            {/* <div className="col-md-4">
                                <img src={loan1} className="d-flex justify-content-center img-fluid imgHW rounded" alt="business_loan"/>
                            </div>
                            <div className="col-md-4">
                                <img src={loan} className="d-flex justify-content-center img-fluid imgHW rounded" alt="business_loan"/>
                            </div>
                            <div className="col-md-4">
                            <img src={loan2} className="d-flex justify-content-center img-fluid imgHW rounded" alt="business_loan"/>
                            </div> */}
                        {/* </div> */}

                        <div className="d-flex mt-5" style={{ justifyContent: "space-evenly", alignItems: "center" }}>
                            <div className="">
                                <img src={loan} className="imgHW"/>
                            </div>
                            <div className="">
                                <img src={loan1} className="imgHW"/>
                            </div>
                            <div className="">
                                <img src={loan2} className="imgHW"/>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleClick} className="btn btn-outline mb-5 mt-3" style={{ background: "#6C0505", color: "#fff" }}>Apply for Credit Line</button>
                </div>
            </div>
        </>
    )
}

export default Wedding