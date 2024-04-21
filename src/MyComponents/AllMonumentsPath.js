import React from 'react'
import './AllMonumentsPath.css'
import TajMahal2 from '../Images/TajMahal2.jpg'
import { useNavigate } from 'react-router-dom'
const AllMonumentsPath = () => {

    const navigate = useNavigate();

    const navigateToAbout = () => {
        // 👇️ navigate to /About
        navigate('/AllMonuments');
    };
    return (
    <div >
        <div className='about-container my-5'>
            <div className='about-back'></div>
            
            <div className='on-about'>

                <div className='left-info'>
                    {/* <img src="https://punetourism.co.in/images/places-to-visit/headers/shinde-chhatri-pune-tourism-entry-fee-timings-holidays-reviews-header.jpg" className="circle-image" alt="..."/> */}
                    <img src={TajMahal2} className="circle-image" alt="..."/>
                </div>
                <div className='right-text font-monospace'>
                    <h3 className='fw-bolder fs-5'>ABOUT US</h3>
                    <h2 className='fw-bold'>Virtually visit the Monuments of the Maharashtra</h2>
                    <p className=''>Paryatan is an AR based web application for the virtual visit of the monument. User can search for any monument and get details of the monument easily</p>
                    <button type='button' className='btn-1 btn-primary mb1 fw-bolder' onClick={navigateToAbout}>Explore More</button>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default AllMonumentsPath
