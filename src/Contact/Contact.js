import React from "react";
import "./Contact.css"
import contact from "../asserts/contact.png"

import { fab,faGithub, faHtml5, faCss3, faJs, faNodejs, faReact } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faPhone,faEnvelope, faHandPointer, faDatabase, faCoffee, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faPhoneSquareAlt, faHandPointer, faCoffee,faEnvelope, fab, faHtml5, faDatabase)



export default function Contact() {
    return (
        <section className="row aboutsec" id="Contact">

            <div className="col-md-6 col-sm-12 left">

                <img className="orin" src={contact} />
             </div>

            <div className="col-md-6 col-sm-12 right">


                <h1 className="edu"> <FontAwesomeIcon icon={['fas', 'phone-square-alt']} />{ } {`Contact Me`} </h1>

                <br />


                <h4 className="edu">+91-8939622025</h4>

                <h4 className="edu"> jayaseelisglory@gmail.com </h4>
                <div className="edu">
                <a href="https://github.com/Glory8910" className="jumpto" target="_blank">
                <FontAwesomeIcon icon={['fab', 'github']}   size="2x" />
                </a>
            
                <a href="mailto:jayaseelisglory@gmail.com" className="jumpto" target="_blank">
                <FontAwesomeIcon icon={['fa','envelope']}  size="2x" />
                </a>
                </div>
                {/* <div className="backtotop"> <FontAwesomeIcon icon={['fas', 'hand-pointer']} size="3x" /></div> */}
            </div>



          

        </section>
    )
}