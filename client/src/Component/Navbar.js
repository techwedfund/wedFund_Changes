import React, {useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import "../Style/Navbar.css";
import logo from "../Images/Group1.png"

const Navbar = ({inputRefName}) =>{


    let location = useLocation();
    useEffect(()=>{
    console.log(location.pathname);
    },[location]);

    const redirectButton = () => {
        const footer = document.getElementById('footer');

        if(footer){
            footer.scrollIntoView({behavior: 'smooth'})
        }
    };
    return(
        <>
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top bg-white">
                <div className="container">
                   <Link className="navbar-brand" to="/"><img className="logo" src={logo} alt="Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           <Link className={`nav-link ${location.pathname==="/"? "active": ""}` } aria-current="page" to="/"></Link>
                        </li>
                        <li className="nav-item">
                           <Link className={`nav-link /${location.pathname==="/aboutUs"? "active": ""}`} activeclassname="active" data-toggle="collapse" data-target="#navbarCollapse" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                           <Link className={`nav-link /${location.pathname==="/how-it-works"? "active": ""}`} activeclassname="active" data-toggle="collapse" data-target="#navbarCollapse" to="/how-it-works">How It Works</Link>
                        </li>
                        <li className="nav-item">
                           <Link className={`nav-link /${location.pathname==="/careers"? "active": ""}`} activeclassname="active" data-toggle="collapse" data-target="#navbarCollapse" to="/careers">Careers</Link>
                        </li>
                        <li className="nav-item">
                       <Link className={`nav-link`} activeclassname="active" data-toggle="collapse" data-target="#navbarCollapse" to="https://www.lendingkart.com/dashboard/auth">Track your Application</Link>
                        </li>
                        <li className="nav-item">
                       <Link to="/#footer" className={`nav-link`} activeclassname="active" data-toggle="collapse" data-target="#navbarCollapse" onClick={redirectButton}>Contact Us</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="https://www.lendingkart.com/business-loan/sme/Wedfund?lksrc=c3JjPVdlZGZ1bmQmdHlwZT1lY29tJnJlZmlkPVdlZGZ1bmQwMDE" className="btn btn-outline mrgn" activeclassname="active" data-toggle="collapse" data-target="#navbarCollapse" style={{background:"#6C0505",color:"#fff"}}>Get Started</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        </>
    )
}

export default Navbar;