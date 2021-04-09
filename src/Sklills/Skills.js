import React from "react";
import "./Skills.css"
import Skillsimg from "../asserts/Skillsimg.png"
import nnpm from "../asserts/nnpm.png"
import nbootsrap from "../asserts/nbootsrap.png"
import node from "../asserts/node.png"
import ncss from "../asserts/ncss.png"
import nexpress from "../asserts/nexpress.png"
import nhtml from "../asserts/nhtml.png"
import njs from "../asserts/njs.png"
import nmongo from "../asserts/nmongo.png"
import nreact from "../asserts/nreact.png"
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Skills() {
    return (
        <section className="row aboutsec" id="Skills">

            <div className="col-md-6 col-sm-12 left">

                <img src={Skillsimg} />
            </div>

            <div className="col-md-6 col-sm-12 right">


                <h1 className="skillHead">My Skills</h1><br/>
                
              
                <h3> Have hands on experience in the following stacks and who is in pursuit of exploring new technologies and stacks.</h3><br/>
             <br/>
               <div className="imgsize row">
                    <div className="col-sm-2 ice col-md-3 col-lg-3"> <img className="imgs" src={nhtml} />
                    </div>
                    <div className="col-sm-2 ice col-md-3 col-lg-3">   <img className="imgs" src={ncss} />
                    </div>
                    <div className="col-sm-2 ice col-md-3 col-lg-3">      <img className="imgs" src={njs} />
                    </div>
                    <div className=" col-sm-2  ice  col-md-3 col-lg-3">     <img className="imgs" src={nbootsrap} />
                    </div>
                    </div>
                    <div className="imgsize row">
                    <div className=" col-sm-2  ice  col-md-3 col-lg-3">         <img className="imgs" src={nmongo} />

                    </div>
                    <div className=" col-sm-2  ice  col-md-3 col-lg-3">      <img className="imgs" src={node} />
                    </div>
                    <div className="col-sm-2  ice  col-md-3 col-lg-3">             <img className="imgs" src={nexpress} />
                    </div>

                    <div className="col-sm-2  ice  col-md-3 col-lg-3">      <img className="imgs" src={nreact} />
                    </div>

                  
                </div>
       
            </div>

        </section>
    )
}