import React, {useState} from 'react'
import {Link} from 'react-router-dom';

function Header() {

    // setting mobile nav
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    // change nav color when scrolling
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if( window.scrollY >= 90){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    // close menu on click
    const closeMenu = () => setClick(false);

  return (
    <nav className={color ? 'container-fluid navbar navbar-expand-lg navbar-dark sticky-top content header-bg' : 'container-fluid navbar navbar-expand-lg sticky-top content'}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Paryatan</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/AllMonuments">Monuments</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
   
  )
}

export default Header
