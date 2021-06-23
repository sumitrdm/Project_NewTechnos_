import React from "react";
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Navbar from "./Pages/Navbar";
import Home from "./Components_HomePage/Home";
import Services from "./Pages/Services";
import Resources from "./Pages/Resources";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Signup from "./Pages/Signup";
import ServicesOnlineCourses from "./Pages/Services/Services_online_courses"
import ServicesOnlineCertificateCourses from "./Pages/Services/Services_Online_Certificate_Courses"

import ServicesOnlineCertificateCoursesUdemy  from "./Pages/Services/Services_Online_Certificate_Courses_udemy"
import ServicesOnlineCertificateCoursesCoursera  from "./Pages/Services/Services_Online_Certificate_Courses_coursera"
import ServicesOnlineCertificateCoursesGoogle  from "./Pages/Services/Services_Online_Certificate_Courses_google"
import ServicesOnlineCertificateCoursesMicrosoft  from "./Pages/Services/Services_Online_Certificate_Courses_microsoft"
import ServicesOnlineCertificateCoursesUdacity  from "./Pages/Services/Services_Online_Certificate_Courses_linkedin"
import ServicesOnlineCertificateCoursesEduonix  from "./Pages/Services/Services_Online_Certificate_Courses_eduonix"

import ServicesSpecialOffers  from "./Pages/Services/Services_special_offers"
import ServicesInternship  from "./Pages/Services/services_internship"
import ServicesWorkshop  from "./Pages/Services/services_workshop"
import ServicesTraining  from "./Pages/Services/services_training"
function App() {
  return (

    <React.Fragment>
    <Router>

     <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/resources' exact component={Resources} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/services' exact component={Services} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/services/online_courses' exact component={ServicesOnlineCourses} />
          <Route path='/services/Online_Certificate_Courses' exact component={ServicesOnlineCertificateCourses} />
          
          <Route path='/services/Online_Certificate_Courses/udemy' exact component={ServicesOnlineCertificateCoursesUdemy} />
          <Route path='/services/Online_Certificate_Courses/coursera' exact component={ServicesOnlineCertificateCoursesCoursera} />
          <Route path='/services/Online_Certificate_Courses/google' exact component={ServicesOnlineCertificateCoursesGoogle} />
          <Route path='/services/Online_Certificate_Courses/microsoft' exact component={ServicesOnlineCertificateCoursesMicrosoft} />
          <Route path='/services/Online_Certificate_Courses/linkedin' exact component={ServicesOnlineCertificateCoursesUdacity} />
          <Route path='/services/Online_Certificate_Courses/eduonix' exact component={ServicesOnlineCertificateCoursesEduonix} />
          
          <Route path='/services/special_offers' exact component={ServicesSpecialOffers} />
          <Route path='/services/workshop' exact component={ServicesWorkshop} />
          <Route path='/services/training' exact component={ServicesTraining} />
          <Route path='/services/internship' exact component={ServicesInternship} />
          
          

          <Route component={Error}/>
        </Switch> 
        </Router>

    </React.Fragment>
  );
}

export default App;


