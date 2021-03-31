import React, { useState } from "react";
import "./About.css"
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Intro from "../asserts/Intro.png"
import girl from "../asserts/girl.jpg"


import { fab, faGithub, faHtml5, faCss3, faJs, faNodejs, faReact } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faPhone, faEnvelope, faHandPointer, faDatabase, faCoffee, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faPhoneSquareAlt, faHandPointer, faCoffee, faEnvelope, fab, faHtml5, faDatabase)



export default function About() {




    return (
        <section className="row aboutsec">
            <div className="col-md-6 col-sm-12 left"> <h1 >Hi, I'm Glory Jayaseeli</h1>
                <br />
                <h3> A Web Developer passionate about developing web applications, interested in building responsive and interactive interfaces using React and NodeJs.
    </h3><br />

                <div className="centerfor">
                    <a href="https://github.com/Glory8910" className="jumpto" target="_blank">

                        <FontAwesomeIcon icon={['fab', 'github']} color="brown" size="2x" />
                    </a>

                    <a href="mailto:jayaseelisglory@gmail.com" className="jumpto" target="_blank">
                        <FontAwesomeIcon icon={['fa', 'envelope']} color="brown" size="2x" />
                    </a>
                </div>

                <br />
                <div className="centerfor">
                    <button className="btn  btn-lg buton" id="contact">
                        <Link to="Contact" spy={true} smooth={true} duration={500}>
                            Contact Me

        </Link ></button>

                    <a target=" _blank"  href="https://drive.google.com/file/d/12gZ4sU6YKXAqfeUvxE_z44vvvejMkC_7/view">      <button className="btn btn-lg  buton" id="contact">Resume</button></a>

                </div>
            </div>
            <div className="col-md-6 col-sm-12 right">
                <img src={girl} />
            </div>
        </section>
    )
}