import React from "react";
import '../Style/Document.css';

const Document = () => {

    return (
        <>
            <div className="container my-5">
                <div className="row my-5">
                    <div className="col-lg-12">
                        <h2 className="docH">Documents <span style={{ color: "#6C0505" }}>Required</span></h2>
                        <ul className="list-group list-group-horizontal info-timeline docUl med7" style={{ marginBottom: "-5rem" }}>
                            <li type="button" className="btn btn-outline mx-2 mob7" style={{ borderColor: "black", cursor: "auto" }} data-mdb-ripple-color="dark">PAN Card</li>
                            <li type="button" className="btn btn-outline mx-2 mob7" style={{ borderColor: "black", cursor: "auto" }} data-mdb-ripple-color="dark">Aadhar Card</li>
                            <li type="button" className="btn btn-outline mx-2 mob7" style={{ borderColor: "black", cursor: "auto" }} data-mdb-ripple-color="dark">Business Reg</li>
                            <li type="button" className="btn btn-outline mx-2 mob7" style={{ borderColor: "black", cursor: "auto" }} data-mdb-ripple-color="dark">GST</li>
                            <li type="button" className="btn btn-outline mx-2 mob7" style={{ borderColor: "black", cursor: "auto" }} data-mdb-ripple-color="dark">Bank Statement</li>
                            <li type="button" className="btn btn-outline mx-2 mob7" style={{ borderColor: "black", cursor: "auto" }} data-mdb-ripple-color="dark">Company PAN*</li>
                            <li type="button" className="btn btn-outline mx-2 mob7" style={{ borderColor: "black", cursor: "auto" }} data-mdb-ripple-color="dark">Partnership Deed*</li>
                        </ul>
                    </div>
                </div>
                <p className="docP">*only for pvt ltd, partnership * LLC Companies</p>
            </div>
        </>
    )
}

export default Document;