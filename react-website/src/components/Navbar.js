import React, {useState, useEffect} from 'react';
import { Router } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true)

    const handleClick = () =>setClick(!click);
    const closeMobileMenu = () =>setClick(false)

    const showButton = () =>{ if(window.innerWidth<=960){
        setButton(false);
    }else{
        setButton(true);
    }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className='navbar'>  
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onclick={closeMobileMenu} >
                    TRVL 
                    <i className='fab fa-typo3'/>
                </Link> 

                <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>

                <li className="nav-item">
                    <Link to='/' className='nav-links' onclick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/Services' className='nav-links' onclick={closeMobileMenu}>
                        Services
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/Products' className='nav-links' onclick={closeMobileMenu}>
                        Products
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/Sign-Up' className='nav-links-mobile' onclick={closeMobileMenu}>
                        Sign-Up
                    </Link>
                </li>
                </ul>

                {button && <Button buttonStyle='btn--outline'>SIGN-UP</Button>}

            </div>
        </nav>
        </>
    );
}

export default Navbar;
