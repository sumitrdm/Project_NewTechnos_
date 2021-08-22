/* eslint-disable react/jsx-pascal-case */
import React from "react";
import HeroSection from "./HeroSection"
import Blog_view from "./Blog_view";
import Services_View from "./Services_View";
import Resources_View from "./Resources_View";
import Contact from "./Contact";
import Footer from "./Footer";
function Home()
{
    return (
<div>

    

    <HeroSection/>
    <Blog_view/>
    <Services_View />
    <Contact/>
    <Resources_View />
    <Footer/>
    

    </div>
   
    )
}
export default Home;