import React from "react";
import "./Work.css"
import exp from "../asserts/exp.jpg"

export default function About(){
    return(
<section className="row aboutsec">

<div className="col-md-6 col-sm-12 right">
    <img src={exp} />
    </div>

    
    <div className="col-md-6 col-sm-12 left">
         <h1>Work Experice</h1><br/>
         <h3>Design and Automation Engineer </h3>
         <h4>Starpac</h4>
 <h4>Woked as Design engineer, mainly worked in planning and development of schema, delgation of responsiblities and testing of functionalities of packaging machines</h4>

    </div>
 
</section>
    )
}