import React from "react";
import '../Style/Why.css';
import collateral from "../Images/collateral.png";
import rates from "../Images/rates.png";
import assured from "../Images/assured.png";
import financing from "../Images/financing.png";

const WhyWed = () => {


    return (
        <>
            {/* <section className="mrt why"> */}
            <div className="container whyContainer">
                <div className="row">
                    <h2 className="text-start" style={{ fontWeight: "600", fontFamily: "Montserrat" }}>Why <span style={{ color: "#6C0505" }}>WedFund</span></h2>
                    <div className="col-md-6 my-3">
                        <ul className="list-group custom-list whyText">
                            <li className="list-group-item marBottom"><img src={collateral} alt="img" className="img_ed img-fluid" /> <div>Collateral Free Financing</div></li>
                            <li className="list-group-item"><img src={rates} alt="img" className="img_ed img-fluid" /><div>Assured & Reliable Funding</div></li>
                        </ul>
                    </div>
                    <div className="col-md-6 my-3">
                        <ul className="list-group custom-list whyText">
                            <li className="list-group-item marBottom"><img src={assured} alt="img" className="img_ed img-fluid" /><div>Competitive Interest Rates</div></li>
                            <li className="list-group-item"><img src={financing} alt="img" className="img_ed img-fluid" /><div>Extra Financing for Peak Season</div></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyWed;