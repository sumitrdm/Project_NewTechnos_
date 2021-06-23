import React from "react"
import "../Services/Services_Online_Certificate_Courses_google.css"
function ServicesSpecialOffers()
{
    return <React.Fragment>

<div className="heading" style={{fontSize:"50px",color:"#CF0000",fontWeight:"bold"}}>Special offers and deals</div>

        <div className="wrapperr">
                <div className="cardd">
                <img src="/images/s.jpg" alt="no"></img>
                <div className="infoo">
                    <h1>Abobe</h1>
                    <p>Free Machine Learning Course by Google</p>
                    <a target="_blank" href="https://learndigital.withgoogle.com/digitalgarage/course/machine-learning-crash-course" className="bttt" alt="nolink" rel="noreferrer">Get Link</a>
                </div>
                </div>

                <div className="cardd">
                <img src="/images/s.jpg" alt="no"></img>
                <div className="infoo">
                    <h1>Google</h1>
                    <p>Google Free AI Course – Learn Artificial Intelligence for FREE</p>
                    <a target="_blank"  href="https://learndigital.withgoogle.com/digitalunlocked/course/elements-artificial-intelligence" className="bttt" alt="nolink" rel="noreferrer">Get Link</a>
                </div>
                </div>

                <div className="cardd">
                <img src="/images/s.jpg" alt="no"></img>
                <div className="infoo">
                    <h1>Google</h1>
                    <p>Free Android Development Courses by Google</p>
                    <a target="_blank"  href="https://developer.android.com/codelabs/build-your-first-android-app#0" className="bttt" alt="nolink" rel="noreferrer">Get Link</a>
                </div>
                </div>
</div>
    </React.Fragment>
}
export default ServicesSpecialOffers;