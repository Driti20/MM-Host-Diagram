import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { FormattedMessage } from 'react-intl'
import clsx from "clsx";
import { BsTriangleFill } from 'react-icons/bs'
import { MdArrowDropDown} from 'react-icons/md'
import './navbar.scss'
import './megamenu/megamenus.scss'
import { MainData } from './data'
import MobileNav from '../moblileNavbar/MobileNav';

const Navbar = (props) => { 
    const [isSticky, setIsSticky] = useState(false);
   
    useEffect(() => {
    const nav = document.querySelector(".navbar");
    const navHeight = nav.scrollHeight;

    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsSticky(scrollHeight > 20 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, []); 
    return (
        <div id='navbar' className={clsx(`navbar ${props.styles}`, isSticky ? "nav_sticky" : "")}>
            <Link to='/' className='navbar-logo'>
                <div className='logo'/>
                <h6>HostDiagram</h6>
            </Link>
            <div className='nav-links'>
            {MainData.map((props)=>{
                
                return(
                    <div key={props.cls} className={`nav-link ${props.cls}`}>
                        <Link to={props.to} className='inner-nav-link'>
                                {props.link}
                                {props.megamenu ?  <MdArrowDropDown className='arrow1'/> : null }
                        </Link>
                        {props.megamenu ? <div className='megamenu-arrow'><BsTriangleFill /></div> : null }
                        {props.megamenu}
                    </div>
                )
            })}

            </div>
            <div className='nav-auth'>              
                <Link to='/' className='link1'>
                    <FormattedMessage id='log-in' defaultMessage='Log In' />
                </Link>
                <Link to='/SignUp' className='link2'>
                    <span>
                        <FormattedMessage id='sign-up' defaultMessage='Sign Up' />
                    </span>
                </Link>
            </div>
            <MobileNav />
        </div>
    )
}

export default Navbar