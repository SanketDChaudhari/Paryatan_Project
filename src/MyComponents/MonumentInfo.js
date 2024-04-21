import React, {useState, useEffect, useRef} from 'react';
import { Link, useParams } from 'react-router-dom';
import './MonumentInfo.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {api, api2} from '../index';
import axios from "axios";
import www from '../Images/www.svg';
import location from '../Images/location.svg';
import speaker_on from '../Images/speaker_on.svg';
import speaker_off from '../Images/speaker-off.svg';
import threeD from '../Images/3D.svg';

const MonumentInfo = () => {

    const [selectedVoice, setSelectedVoice] = useState(null);
    const [voices, setVoices] = useState([]);

    const speech = new SpeechSynthesisUtterance();

    const text = useRef(null);
    const btn = useRef(null);


    const { monumentName } = useParams();
    const [Data, setData] = useState([]);
    const [Info, setInfo] = useState({ data: {} });

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const images = [ Data.image1, Data.image2, Data.image3, Data.image4, Data.image5];
    
    const [speaking, setSpeaking] = useState(false);

    const textcontainer = text.current;


    useEffect(() => {

        window.speechSynthesis.onvoiceschanged = () => {
            const availableVoices = window.speechSynthesis.getVoices();
            setVoices(availableVoices);
            // You can set a default voice here or let the user choose one
            setSelectedVoice(availableVoices[5]); // Set the first voice as the default
        };
        
        const fetchFromApi = async() => {
            try {
                const { data } = await axios.get(`${api}/monument/${monumentName}`);
                setData(data);
                const info  = await axios.get(`${api2}/${monumentName}`);
                setInfo(info);
                // console.log(data);
                // console.log(info);
                // console.log(Data.websiteLink);
              } catch (error) {
                console.error("Error fetching data:", error);
              }
        }
        
        fetchFromApi();
        const interval = setInterval(goToNextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    const toggleSpeech = () => {
        if (!speaking) {
            speech.text = textcontainer.textContent;

            // Check if a voice is selected
            if (selectedVoice) {
                speech.voice = selectedVoice;
            }

            window.speechSynthesis.speak(speech);
            btn.current.src = speaker_on;
            setSpeaking(true);
            speech.onend = () => {
                btn.current.src = speaker_off;
                setSpeaking(false);
            };
        } else {
            window.speechSynthesis.cancel();
            btn.current.src = speaker_off;
            setSpeaking(false);
        }
    };

    const { data } = Info;
    const mapURL = `https://www.google.com/maps/place/${Data.location}`;

  return (
    <>
        <div className='right-content'>
            
            <a href={Data.websiteLink}  rel="noopener noreferrer">
                <img className='icon-size' src={www}/>
            </a>
            
            <a href={mapURL} rel="noopener noreferrer">
                <img className='icon-size' src={location}/>
            </a> 

            {/* <a href={Data.model3DLink} rel="noopener noreferrer">
                <img className='icon-size' src={threeD}/>
            </a> */}
            
            <Link to={'/model'}>
                <img className='icon-size' src={threeD}/>
            </Link>

        </div>
        <div className="app-container shadow5">
            <div className="left-info-1">
                <div className='text-heading'>
                    <h1>{Data.name}</h1>
                    <h5 className='listenNow'>Listen Now <img src={speaker_off} className='clickable-element' onClick={toggleSpeech} ref={btn}/></h5>
                </div>
                
                <div className='text-container' ref={text}>
                    {Object.keys(data).map((key) => (
                        <div key={key}>
                            <h3>{key}</h3>
                            <p>{data[key]}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="right-carousel">
                <Carousel className='carousel' showStatus={false} showThumbs={false} showArrows={false} selectedItem={currentIndex}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} style={{borderTopRightRadius: "30px"}} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
        <div className='background'></div>
    
    </>
  )
}

export default MonumentInfo
