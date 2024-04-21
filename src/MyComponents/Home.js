import React from 'react';
import Gallery from './Gallery';
import CarouselHome from './CarouselHome';
import AllMonumentsPath from './AllMonumentsPath';
import AboutComponent from './AboutComponent';

const Home = (props) => {
  return (
    <>
        <CarouselHome/>
        <Gallery title="What's Hot" Data={props.Data}/>
        <AllMonumentsPath/>
        <Gallery title="All" Data={props.Data}/>
        <AboutComponent/>
    </>
  )
}

export default Home
