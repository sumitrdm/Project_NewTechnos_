import React from "react";
import "./Blog_view.css";
import {Link, Links} from "react-router-dom";

function Blog_view()
{
    return (
        <div>
            

      <div class="containerr">
      <h1>Blog</h1>
  <main class="grid">
    <article>
      <img src="/images/app.jpg" alt="Sample photo"/>
      <div class="text">
        <h3>App Development</h3>
        <p>Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.</p>
        <Link to="/blog">
        <a href="#" class="btn btn-primary btn-block mybt">Let's go</a>
      </Link>  
      
      </div>
    </article>
    <article>
      <img src="/images/web.png" alt="Sample photo"/>
      <div class="text">
        <h3>Web Development</h3>
          <p>Web development is the work involved in developing a Web site for the Internet or an intranet.</p>
          <Link to="/blog">
          <a href="#" class="btn btn-primary btn-block mybt">Let's go</a>

          </Link>    
      
      </div>
    </article>
    <article>
      <img src="/images/pro.png" alt="Sample photo"/>
      <div class="text">
        <h3>Programming Languages</h3>
        <p>.A programming language is a computer language that is used by programmers (developers) to communicate with computers. It is a set of instructions written in any specific language ( C, C++, Java, Python) to perform a specific task.</p>
        <Link to="/blog">
        <a href="#" class="btn btn-primary btn-block mybt">Let's go</a>

        </Link>
      
      </div>
    </article>
    
  
  </main>
</div>





              
          </div>




       

    );

}
export default Blog_view;