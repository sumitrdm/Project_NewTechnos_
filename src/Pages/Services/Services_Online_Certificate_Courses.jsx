import React from 'react';
import '../Services/Services_Online_Certificate_Courses.css';
import {Link} from "react-router-dom";


function ServicesOnlineCertificateCourses()
{
    return <React.Fragment>
    <div className="heading" style={{fontSize:"50px",color:"#CF0000",fontWeight:"bold"}}>Free Online Courses with Certificates</div>

    <div className="wrapper-grid">

<Link className = "newlink" to="/services/Online_Certificate_Courses/udemy">
<div className="containerr">
    <img src="/images/udemy.png" alt="no"></img>

</div>
</Link>

<Link className = "newlink" to="/services/Online_Certificate_Courses/coursera">

<div className="containerr">
    <img src="/images/coursera.png" alt="no"></img>
</div>
</Link>

<Link className = "newlink" to="/services/Online_Certificate_Courses/google">
<div className="containerr">
    <img src="/images/google.png" alt="no"></img>

</div>
</Link>


<a className = "newlink" target="_blank" href="https://www.youtube.com/watch?v=S3EK2Y5Gaw8&t=89s" rel="noreferrer">
<div className="containerr">
    <img src="/images/microsoft.png" alt="no"></img>

</div>
</a>


<Link className = "newlink" to="/services/Online_Certificate_Courses/linkedin">
<div className="containerr">
    <img src="/images/linkedinn.png" alt="no"></img>

</div>
</Link>

<a className = "newlink" target="_blank" href="https://www.youtube.com/watch?v=WRvTK5P5oyA&t=24s" rel="noreferrer">
<div className="containerr">
    <img src="/images/edonix.jpg" alt="no"></img>

</div>
</a>


    </div>


    </React.Fragment>
}
export default ServicesOnlineCertificateCourses;