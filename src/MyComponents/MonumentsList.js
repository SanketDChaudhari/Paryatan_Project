import React, {useState, useEffect, useRef} from 'react'
import './MonumentsList.css'
import {
    Link
  } from 'react-router-dom';
const MonumentsList = (props) => {
    // const { puneMonuments } = props;
    const list = useRef(null);
    const right = useRef(null);
    const left = useRef(null);
    useEffect(() => {
      // console.log(props);
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
                // manageIcons();
                element.scrollLeft += 875;   
            });
            leftarrow.addEventListener('click', () => {
                element.scrollLeft -= 875;
            })
            element.addEventListener("scroll", manageIcons);
        };
        
      }, []);

  return (
    <>
      <div className='container'>
          <div className='left-arrow' ref={left}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
          </div>
          <ul className='container-box2' ref={list}>
            {/* {props.puneMonuments.map((monument, index) => (
              <li>
                <Link to={'/MonumentInfo'} style={{textDecoration:"none"}}>
                    <div className="mx-2 my-2 card-size2">
                      <img src={monument.monumentImage}  className='image-size2 shadow' alt="..."/>
                      <div className="shadow card-text2">
                        <h4>{monument.monumentName}</h4>
                      </div>
                    </div>
                </Link>
              </li>
            ))} */}


            {/* <li>
              <Link to={'/MonumentInfo'} style={{textDecoration:"none"}}>
                  <div className="mx-2 my-2 card-size2">
                    <img src="https://i0.wp.com/mumbai7.com/wp-content/uploads/2023/03/Aga-Khan-Palace.jpg"  className='image-size2 shadow' alt="..."/>
                    <div className="shadow card-text2">
                      <h4>Aga Khan Palace</h4>
                    </div>
                  </div>
              </Link>
            </li>
            <li>
            <Link to={'/MonumentInfo'} style={{textDecoration:"none"}}>
                  <div className="mx-2 my-2 card-size2">
                    <img src="https://i0.wp.com/mumbai7.com/wp-content/uploads/2023/03/Aga-Khan-Palace.jpg"  className='image-size2 shadow' alt="..."/>
                    <div className="shadow card-text2">
                      <h4>Aga Khan Palace</h4>
                    </div>
                  </div>
              </Link>
            </li>
            <li>
              <div className="mx-2 my-2 card-size2">
                <img src="https://i0.wp.com/mumbai7.com/wp-content/uploads/2023/03/Aga-Khan-Palace.jpg"  className='image-size2' alt="..."/>
                <div className="shadow card-text2">
                  <h4>Aga Khan Palace</h4>
                </div>
              </div>
            </li>
            <li>
              <div className="mx-2 my-2 card-size2">
                <img src="https://i0.wp.com/mumbai7.com/wp-content/uploads/2023/03/Aga-Khan-Palace.jpg"  className='image-size2' alt="..."/>
                <div className="shadow card-text2">
                  <h4>Aga Khan Palace</h4>
                </div>
              </div>
            </li> */}
          </ul>


          <div className='right-arrow' ref={right}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
              </svg>
          </div>
        </div>
    </>
  )
}

export default MonumentsList
