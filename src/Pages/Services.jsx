import React from "react";
import './services.css';
import {Link} from "react-router-dom";


function Services()
{
    return <>
       <div className="heading" style={{fontSize:"50px",color:"#CF0000",fontWeight:"bold"}}>Services</div>

    <div className="wrapper-grid">


    <div className="containerr">
    <Link className = "newlink" to="/services/online_courses">

        <img src="images/online.jpg" alt="" className="profile-img"></img>
        <h1 className="name">Free online courses</h1>

        <p className="description">Here you will get all the the free online courses which you want for free from different companies and online plateforms!.</p>
        <button className="btnn">let's go</button>
        </Link>

    </div>



    <div className="containerr">
    <Link className = "newlink" to="services/Online_Certificate_Courses">

        <img src="images/certii.png" alt="" className="profile-img"></img>
        <h1 className="name">Free online courses with certificates</h1>
        <p className="description">Here you will get all the the free online courses which you want for free with certificate from different companies and online plateforms!.</p>
        <button className="btnn">let's go</button>
        </Link>

    </div>

    <div className="containerr">
    <Link className = "newlink" to="services/special_offers">
        <img src="images/special.png" alt="" className="profile-img"></img>
        <h1 className="name">special offers</h1>
        <p className="description">Here you will get all the the special offers and deals provided by different companies and online plateforms!.</p>
        <button className="btnn">let's go</button>
        </Link>

    </div>

    <div className="containerr">
    <Link className = "newlink" to="/services/internship">
        <img src="images/internshipp.png" alt="" className="profile-img"></img>
        <h1 className="name">Internships</h1>
        <p className="description">Here you will get all the the different type of Internship provided by different companies for free!.</p>
        <button className="btnn">let's go</button>
        </Link>

    </div>
    

    <div className="containerr">
    <Link className = "newlink" to="/services/training">

        <img src="images/training.png" alt="" className="profile-img"></img>
        <h1 className="name">Training</h1>
        <p className="description">Here you will get all the the different type of Training provided by different companies with free certificates!.</p>
        <button className="btnn">let's go</button>
        </Link>

    </div>
    

    <div className="containerr">
    <Link className = "newlink" to="/services/workshop">

        <img src="images/workshop.jpg" alt="" className="profile-img"></img>
        <h1 className="name">Workshops and events</h1>
        <p className="description">Here you will get all the the free Workshops and latest event links which is conducted by different plateforms!.</p>
        <button className="btnn">let's go</button>
        </Link>

    </div>

    </div>

    </>
    
}
export default Services;