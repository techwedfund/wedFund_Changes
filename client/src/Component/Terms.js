import React from "react";
import '../Style/Terms.css';


const Terms = () => {
    return (
        <>
            <div className="container mt-5">
                <h4><span style={{ color: "#6C0505" }}>Terms </span> we offer*</h4>
                <div className="row mt-5">
                    <div className="col-md-6 mb-3 termsEdit">
                        <p className="para">Loan Amount :   ₹1 lakh- ₹35 lakhs</p>
                    </div>
                    <div className="col-md-6 mb-3 termsEdit">
                        <p className="para">Interest Rates** :  1.5% - 2.5% per month</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3 termsEdit">
                        <p className="para">Loan Tenure :   1 month - 1 year</p>
                    </div>
                    <div className="col-md-6 mb-3 termsEdit">
                        <p className="para">Pre Closure Fee *** :  ₹ 0/- </p>
                    </div>
                </div>

                <p className="mt-5">
                    *Preclosures are only allowed after first EMI is  payed in full
                    <br/>
                    ** Based on the health of your business, revenues and annual turnover
                    <br/>
                    *** Preclouser charges maybe applicable on case-to-case basis.
                </p>
            </div>
        </>
    )
}

export default Terms;