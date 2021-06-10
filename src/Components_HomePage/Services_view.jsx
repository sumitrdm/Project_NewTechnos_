import React from "react";
import './Services.css';


import {ServicesContainer,ServicesWrapper,ServicesH1,ServicesH2,ServicesIcon,ServicesP,ServicesCard} from './serviceElement';

function Services_view()
{
    return (
        <>
        
            
        <div>
        <h1 className='heading'> Our Services</h1>
        <div className='underline'></div>


    <ServicesContainer id ='services'>
        
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src="./images/internship.jpg"/>
                <ServicesH2>Internship</ServicesH2>
                <ServicesP>Here! You will get all the latest Internship provided for both Technical and Non-Technical Backgrounds.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src="./images/notes.jpg"/>
                <ServicesH2>Coupons</ServicesH2>
                <ServicesP>Here! You will get all the free Coupons of different website that provide you paid courses ex.Udemy,coursera,udacity,khan academy and many more.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src="./images/videos.jpg"/>
                <ServicesH2>Videos</ServicesH2>
                <ServicesP>Here! You will get the free video content for your field.</ServicesP>
            </ServicesCard>
        </ServicesWrapper> 
    </ServicesContainer>


            
        </div>
      
 


        

</>

    
  )
}
export default Services_view;