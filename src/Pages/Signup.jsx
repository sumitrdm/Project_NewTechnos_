import React from "react";
import '../Components_HomePage/Contact.css';
function Signup()
{
return(
    <>
     
<div className="main_containerr">
  
    <div className="row">
     <div className="col-md-8"> 
         <div className="contact-from">
         <h5>Sign Up!</h5>
         <form action="#" method="post" onsubmit="return check();" role="form" class="php-email-form">
          <div class="row">
                 <div className="col-md-12">
                 <div className="single-form">

                     <input type="text" placeholder="Your Name" id="name"/>
                 </div>
                 </div>

                 <div className="col-md-12">
                     <div className="single-form">
 
                         <input type="text" placeholder="Enter email-id" id="email"/>
                     </div>
                     </div>

                     <div className="col-md-12">
                         <div className="single-form">
     
                             <input type="text" placeholder="Enter password" id="subject"/>
                         </div>
                         </div>

                         <div className="col-md-12">
                             <div className="single-form">
         
                                 <input type="text" placeholder="confirm password" id="phone"/>
                             </div>
                             </div>

                           

                                 <div class="col-md-12">
                                     <div className="single-form">
                                      <button className="main-btn" type="submit" onclick="send(event)">Submit</button>
                                     </div>
                                     </div>
             
     
                                     
                                  </div>
         </form>

     </div>

 </div>




     </div>

   

</div> 

    
    </>
    );

}
export default Signup; 