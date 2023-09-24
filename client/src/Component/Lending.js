import React from 'react';
import lending from '../Images/Lending.jpg';
import '../Style/Lending.css';

import { Link } from 'react-router-dom';
const Lending = () => {
    return (
        <>
            {/* Lending partners logo and detail */}
            <div className='container lendingPartners mt-5'>
                <div className='row'>
                    <h1 className='text-center mb-3'>Our Lending Partner</h1>
                    <div className='col-md-4 m-auto'>
                        <img src={lending} className='img img-fluid' alt='lendingPartner' />
                        <div className="linkEdit">
                            <Link to='https://www.lendingkart.com/business-loan/sme/Wedfund?lksrc=c3JjPVdlZGZ1bmQmdHlwZT1lY29tJnJlZmlkPVdlZGZ1bmQwMDE' className='linkButton btn text-center'>Contact Lending Partner</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lending;