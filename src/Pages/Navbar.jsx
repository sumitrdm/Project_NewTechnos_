import React,{useState} from "react";
import {Link, Links} from "react-router-dom";
import "./Navbar.css";
function Navbar()
{
        const [isMobile,setIsMobile] = useState(false);

    return( 
    <nav className="Navbar">
            {/* 
            <Link to="/">
            <img className="logo" src="/images/1.png"></img>

            </Link> */}
            <h3 className="logo">Logo</h3>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => {setIsMobile(false)}} >
            <Link to="/" className="home">
                <li>Home</li>
            </Link>
            <Link to="/blog" className="blog">
                <li>Blog</li>
            </Link>
            <Link to="/services" className="services">
                <li>Services</li>
            </Link>
            <Link to="/resources" className="resources">
                <li>Resources</li>
            </Link>
            <Link to="/contact" className="contact">
                <li>Contact</li>
            </Link>
            <Link to="/signup" className="signup">
                <li>Signup</li>
            </Link>
        </ul>
        <button className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
    </nav>)
}
export default Navbar;