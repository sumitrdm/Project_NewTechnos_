import React from "react";
import {Link} from "react-router-dom";
import './Resources.css';
function Resources_View()
{
    return(
    <>
        <div className='heading'>
            <h1>Resources</h1>
        </div>
        <div className='main'>
        <div className='items'>
            <ol className="resourceolll">
                <Link to="/resources"><li>Roadmap for Web Development</li></Link>
            </ol>
            
        </div>
        <div className='items'>
            <ol className="resourceolll">
                
                <Link to="/resources"><li>Roadmap of App Development</li></Link>
            </ol>
            
        </div>

        <div className='items'>
            <ol className="resourceolll">
                
                <Link to="/resources"><li>Roadmap for final year students</li></Link>
            </ol>
            
        </div>
        <div className='items'>
            <ol className="resourceolll">
                
                <Link to="/resources"><li>Roadmap for programming Languages</li></Link>
            </ol>
            
        </div>
   
        </div>
    </>
)};
export default Resources_View;
