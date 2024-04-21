import React, {useEffect, useRef} from 'react'
import './Gallery.css'

import {
    Link
} from 'react-router-dom';
  

const Gallery = (props) => {

    const list = useRef(null);
    const right = useRef(null);
    const left = useRef(null);
   
    useEffect(() => {
        
        const element = list.current;
        const rightarrow = right.current;
        const leftarrow = left.current;
          
        const manageIcons = () => {
            if(element.scrollLeft >= 10){
                leftarrow.innerHTML = 
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clip-rule="evenodd" />
                </svg>`;
            }else{
                leftarrow.innerHTML = 
                `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>`;
            }

            let maxScrollValue = element.scrollWidth - element.clientWidth - 10;
            // console.log("scroll width: ", element.scrollWidth);
            // console.log("client width: ", element.clientWidth);
            
            if(element.scrollLeft >= maxScrollValue){
                rightarrow.innerHTML = 
                `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>`;
            }else{
                rightarrow.innerHTML = 
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
                </svg>`;
            }

        };
        return() => {
            rightarrow.addEventListener("click", () => {
                element.scrollLeft += 875;   
            });
            leftarrow.addEventListener('click', () => {
                element.scrollLeft -= 875;
            })
            element.addEventListener("scroll", manageIcons);
        }
        
      }, []);


    return (
    <div className='parent my-4'>
        <div className='container' style={{justifyContent: 'space-between'}}>
            <h2 className='float-start'>{props.title}</h2>
            <div className='float-end'>
                <div ref={left}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                
                <div ref={right}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
        
        <div className='container' >

            <ul className='container-box1' ref={list}>

                {
                props.Data.map((ele,index)=>{    
                if(props.title==="What's Hot" && index<5){
                    return(
                        <li>
                            <Link to={`/${ele.monumentName}`} style={{textDecoration:"none"}}>
                                <div className="mx-2 my-2 card-size1">
                                    <img src={ele.monumentImage}  className='image-size1 shadow' alt="..."/>
                                    <div className="shadow card-text1">
                                        <h4>{ele.monumentName}</h4>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                }else if(props.title==="Agra" && ele.city=="Agra"){
                    return(
                        <li>
                            <Link to={`/${ele.monumentName}`} style={{textDecoration:"none"}}>
                                <div className="mx-2 my-2 card-size1">
                                    <img src={ele.monumentImage}  className='image-size1 shadow' alt="..."/>
                                    <div className="shadow card-text1">
                                        <h4>{ele.monumentName}</h4>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                }else if(props.title==="Mumbai" && ele.city=="Mumbai"){
                    return(
                        <li>
                            <Link to={`/${ele.monumentName}`} style={{textDecoration:"none"}}>
                                <div className="mx-2 my-2 card-size1">
                                    <img src={ele.monumentImage}  className='image-size1 shadow' alt="..."/>
                                    <div className="shadow card-text1">
                                        <h4>{ele.monumentName}</h4>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                }else if(props.title==="Aurangabad" && ele.city=="Aurangabad"){
                    return(
                        <li>
                            <Link to={`/${ele.monumentName}`} style={{textDecoration:"none"}}>
                                <div className="mx-2 my-2 card-size1">
                                    <img src={ele.monumentImage}  className='image-size1 shadow' alt="..."/>
                                    <div className="shadow card-text1">
                                        <h4>{ele.monumentName}</h4>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                }else if(props.title==="Delhi" && ele.city=="Delhi"){
                    return(
                        <li>
                            <Link to={`/${ele.monumentName}`} style={{textDecoration:"none"}}>
                                <div className="mx-2 my-2 card-size1">
                                    <img src={ele.monumentImage}  className='image-size1 shadow' alt="..."/>
                                    <div className="shadow card-text1">
                                        <h4>{ele.monumentName}</h4>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                }else if(props.title==="Pune" && ele.city=="Pune"){
                    return(
                        <li>
                            <Link to={`/${ele.monumentName}`} style={{textDecoration:"none"}}>
                                <div className="mx-2 my-2 card-size1">
                                    <img src={ele.monumentImage}  className='image-size1 shadow' alt="..."/>
                                    <div className="shadow card-text1">
                                        <h4>{ele.monumentName}</h4>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                }else if(props.title==="Other" && ele.city!=="Pune" && ele.city!=="Agra" && ele.city!=="Delhi" && ele.city!=="Aurangabad" && ele.city!=="Mumbai"){
                    return(
                        <li>
                            <Link to={`/${ele.monumentName}`} style={{textDecoration:"none"}}>
                                <div className="mx-2 my-2 card-size1">
                                    <img src={ele.monumentImage}  className='image-size1 shadow' alt="..."/>
                                    <div className="shadow card-text1">
                                        <h4>{ele.monumentName}</h4>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                }else if(props.title==="All"){
                    return(
                        <li>
                            <Link to={`/${ele.monumentName}`} style={{textDecoration:"none"}}>
                                <div className="mx-2 my-2 card-size1">
                                    <img src={ele.monumentImage}  className='image-size1 shadow' alt="..."/>
                                    <div className="shadow card-text1">
                                        <h4>{ele.monumentName}</h4>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                }
                return null;
                })}
                
            </ul>
        </div>
        
    </div>
    )
}

export default Gallery
