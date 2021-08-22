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
         <h5>Contact Us</h5>
         <h2>Get in Touch!</h2>
         <form action="#" method="post" onsubmit="return check();" role="form" class="php-email-form">
          <div class="row">
                 <div className="col-md-6">
                 <div className="single-form">

                     <input type="text" placeholder="Your Name" id="name"/>
                 </div>
                 </div>

                 <div className="col-md-6">
                     <div className="single-form">
 
                         <input type="text" placeholder="email" id="email"/>
                     </div>
                     </div>

                     <div className="col-md-6">
                         <div className="single-form">
     
                             <input type="text" placeholder="subject" id="subject"/>
                         </div>
                         </div>

                         <div className="col-md-6">
                             <div className="single-form">
         
                                 <input type="text" placeholder="phone" id="phone"/>
                             </div>
                             </div>

                             <div className="col-md-12">
                                 <div className="single-form">
                                     <textarea name="message" placeholder="Message" id="message"></textarea>
                                 </div>
                                 </div>

                                 <div class="col-md-12">
                                     <div className="single-form">
                                      <button className="main-btn" type="submit" onclick="send(event)">Send</button>
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