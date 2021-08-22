import React from "react";
import './Services.css';
import {Link} from "react-router-dom";

import {ServicesContainer,ServicesWrapper,ServicesH2,ServicesIcon,ServicesP,ServicesCard} from './serviceElement';

function Services_View()
{
    return (
        <>
        
            
        <div>
        <h1 className='heading'> Our Services</h1>


    <ServicesContainer id ='services'>
        
        <ServicesWrapper>
            <ServicesCard>
            <Link to="/services"><ServicesIcon src="./images/internship.jpg"/></Link>
                <ServicesH2>Internship</ServicesH2>
                <ServicesP>Here! You will get all the latest Internship provided for both Technical and Non-Technical Backgrounds.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <Link to="/services"><ServicesIcon src="./images/notes.jpg"/></Link>
                <ServicesH2>Coupons</ServicesH2>
                <ServicesP>Here! You will get all the free Coupons of different website that provide you paid courses ex.Udemy,coursera,udacity,khan academy and many more.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <Link to="/services"><ServicesIcon src="./images/videos.jpg"/></Link>   
                <ServicesH2>Videos</ServicesH2>
                <ServicesP>Here! You will get the free video content for your field.</ServicesP>
            </ServicesCard>
        </ServicesWrapper> 
    </ServicesContainer>


            
        </div>
      
 


        

</>

    
  )
}
export default Services_View;