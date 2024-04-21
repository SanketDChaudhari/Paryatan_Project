import React from 'react';
import './AllMonuments.css';
import Gallery from './Gallery';
import india from '../Images/india_blue.jpg';
import AboutComponent from './AboutComponent';

const AllMonuments = (props) => {
  
  return (
    <>

    <img src={india} className="head-image"/>
    <Gallery title="Delhi" Data={props.Data}/>
    <Gallery title="Pune" Data={props.Data}/>
    <Gallery title="Agra" Data={props.Data}/>
    <Gallery title="Mumbai" Data={props.Data}/>
    <Gallery title="Aurangabad" Data={props.Data}/>
    <Gallery title="Other" Data={props.Data}/>
    <AboutComponent/>
    </>
  )
}

export default AllMonuments
