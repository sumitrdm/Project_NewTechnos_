import React from "react"
function Blog()
{
    return <React.Fragment>

<div className="heading" style={{fontSize:"50px",color:"#CF0000",fontWeight:"bold"}}>Blog that will help in studies</div>

        <div className="wrapperr">
                <div className="cardd">
                <img src="/images/let.jpg" alt="no"></img>
                <div className="infoo">
                    <h1>Web Development</h1>
                    <p>Free Web Development Course</p>
                    <a target="_blank" href="https://www.youtube.com/watch?v=l1EssrLxt7E&list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n" className="bttt" alt="nolink" rel="noreferrer">Get Link</a>
                </div>
                </div>

                <div className="cardd">
                <img src="/images/let.jpg" alt="no"></img>
                <div className="infoo">
                    <h1>App Development</h1>
                    <p>Free App Development course</p>
                    <a target="_blank"  href="https://www.youtube.com/watch?v=mXjZQX3UzOs" className="bttt" alt="nolink" rel="noreferrer">Get Link</a>
                </div>
                </div>

                <div className="cardd">
                <img src="/images/let.jpg" alt="no"></img>
                <div className="infoo">
                    <h1>Programming Languages</h1>
                    <p>Free Programming Languages Courses</p>
                    <a target="_blank"  href="https://www.youtube.com/watch?v=z9bZufPHFLU&list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" className="bttt" alt="nolink" rel="noreferrer">Get Link</a>
                </div>
                </div>
</div>
    </React.Fragment>
}
export default Blog;

/**update blog */