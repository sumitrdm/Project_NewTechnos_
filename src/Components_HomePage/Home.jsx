import React from "react";
import HeroSection from "./HeroSection"
import Blog_view from "./Blog_view";
import Services_view from "./Services_view";
import Resources_view from "./Resources_view";
import Contact from "./Contact";
import Footer from "./Footer";
function Home()
{
    return (
<div>

    

    <HeroSection/>
    <Blog_view/>
    <Services_view />
    <Contact/>
    <Resources_view />

    
    
    <Footer/>
    

    </div>
   
    )
}
export default Home;