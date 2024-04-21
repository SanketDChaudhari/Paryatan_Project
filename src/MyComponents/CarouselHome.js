import React from 'react'
import './CarouselHome.css'
const CarouselHome = () => {
  return (
    <div>
{/* font-family: 'Gabarito', cursive; */}
    <div className='carousel-content text-center z-1'>
        <h1>Explore World While at Home</h1>
        <h4>Paryantan provides an immersive viewing experience</h4>
    </div>

    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner carousel-style">
            <div className="carousel-item active">
                <img src="https://assets-news.housing.com/news/wp-content/uploads/2019/02/23070252/Maharashtra-government-to-beautify-Gateway-of-India-FB-1200x628-compressed.jpg" className="d-block w-100" alt="..."/>  
            </div>
            <div className="carousel-item">
                <img src="https://punetourism.co.in/images/places-to-visit/headers/shinde-chhatri-pune-tourism-entry-fee-timings-holidays-reviews-header.jpg" className="d-block w-100" alt="..."/>      
            </div>
            <div className="carousel-item">
                <img src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTP0hhU4qsFrWYTx4blHT-vgALjt2ChfpUq8umU5qQlmZcVXEdSsg99imeVYTOIZmEp" className="d-block w-100" alt="..."/>             
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
      
    </div>
  )
}

export default CarouselHome


