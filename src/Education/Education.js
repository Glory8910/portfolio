import React from "react";
import "./Education.css"
import edu from "../asserts/edu.jpg"



export default function Education() {
    return (
        <section className="row aboutsec" id="Education">



            <div className="col-md-6 col-sm-12 right ">


                <h1 className="edu">Education</h1><br />
                <div className="educationlist">

                <h3><strong>B.E </strong></h3>
                <h4>Electronics and Communication</h4>
                <h4><strong>Madha Engineering College</strong></h4>
                <h4><strong>2013-2017</strong>( CGPA-7.8 )</h4><br />


                <h3><strong>HSC</strong></h3>
                <h4><strong>Boston Matriculation Higher Secondary School</strong></h4>
                <h4><strong>2012-2013</strong> ( percentage-84.5 )</h4><br />


                <h3><strong>SSLC</strong></h3>
                <h4><strong>Boston Matriculation Higher Secondary School</strong></h4>
                <h4><strong>2010-2011</strong>
                ( percentage-84.5 )</h4><br />
                </div>
                <br />





            </div>

            <div className="col-md-6 col-sm-12 left">

                <img src={edu} />
            </div>

        </section>
    )
}