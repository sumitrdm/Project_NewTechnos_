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

function App() {
  return (

    <React.Fragment>
    <Router>

     <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/resources' exact component={Resources} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/services' exact component={Services} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/signup' exact component={Signup} />
          <Route component={Error}/>
        </Switch> 
        </Router>

    </React.Fragment>
  );
}

export default App;


