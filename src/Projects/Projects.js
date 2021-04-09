import React from "react"
import "./Projectsstyle.css"
// import "./comp/comp"
import { fab, faHtml5, faCss3, faJs, faNodejs, faReact } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faDatabase, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faCheckSquare, faCoffee, fab, faHtml5, faDatabase)


export default function Project() {
    var data = [
        {
            title: "Pizza Bytes",
            description: "Custom pizza maker with razorpay payment gateway and login authentication",
            demoUrl: "https://pizzabytes.netlify.app/",
            frontEndUrl: "https://github.com/Glory8910/pizzaFrontend",
            BackEndUrl: "https://github.com/Glory8910/pizzaBackend",
            stack: ["Nodejs", "React", "Mongodb"]

        }, {
            title: "Freshdesk Clone",
            description: "Fresh desk clone using HTML,CSS and vanilla Java script to implement the ticket status and priority update, adding and updating contacts using freshdesk Api ",
            demoUrl: "https://freshdeskk.netlify.app/",
            frontEndUrl: "https://github.com/Glory8910/freshdeskclone",
            stack: ["HTML", "Java Script", "CSS"]

        },
        {
            title: "Expense Tracker",
            description: "Expense tracker is an app that allows us to track our expenses, income and also help to frame our financial goals and maintaining them.",
            demoUrl: "https://expensetrackerdaily.netlify.app/",
            frontEndUrl: "https://github.com/Glory8910/expensetrackerfrontend",
            BackEndUrl: "https://github.com/Glory8910/Expenseappbackend",
            stack: ["Nodejs", "React", "Mongodb"]

        }
    ];


    return (
        <div className="projectlist" id="Projects">
            <h1>Projects</h1>
            <div className="row rowcont">
                {
                    data.map((ele) => {

                        return (

                            <div className="card col-sm-5 col-md-5 col-lg-3 boxes " >
                                <div className="card-body">
                                    <h2 className="card-title"><strong>{ele.title}</strong></h2>

                                    <p className="card-text">{ele.description}</p>
                                    <br />

                                    <div className=" row stacklist">

                                        {
                                            ele.stack.map((tech) => {

                                                switch (tech) {

                                                    case ("Nodejs"):
                                                        return <div className="tech col-4">
                                                            <FontAwesomeIcon icon={['fab', 'node-js']} size="2x" />
                                                            <div className="name">Node JS</div>
                                                        </div>

                                                        break;

                                                    case ("React"):
                                                        return <div className="tech col-4">
                                                            <FontAwesomeIcon icon={['fab', 'react']} size="2x" />
                                                            <div className="name">React</div>
                                                        </div>

                                                        break;


                                                    case ("HTML"):
                                                        return <div className="tech col-4">
                                                            <FontAwesomeIcon icon={['fab', 'html5']} size="2x" />
                                                            <div className="name">HTML</div>
                                                        </div>

                                                        break;



                                                    case ("CSS"):
                                                        return <div className="tech col-4">  <FontAwesomeIcon icon={['fab', 'css3-alt']} size="2x" />
                                                            <div className="name">CSS</div></div>

                                                        break;



                                                    case ("Mongodb"):
                                                        return <div className="tech col-4">
                                                            <FontAwesomeIcon icon={['fas', 'database']} size="2x" />
                                                            <div className="name">Mongo DB</div>
                                                        </div>

                                                        break;


                                                        case ("Java Script"):
                                                            return   <div className="tech col-4">
                                                            <FontAwesomeIcon icon={['fab', "js-square"]} size="2x" />
                                                            <div className="name">Java Script</div>
                                                        </div>
    
                                                            break;

                                                    default:
                                                        break;







                                                }

                                            })


                                        }
              

                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-6">
                                            <a href={ele.demoUrl} target="_blank" className="card-link">  <button className="btn btnn btn-sm rounded">  Live Demo
                             </button></a>
                                        </div>
                                        <div className="col-6">

                                            {

                                                (ele.BackEndUrl) ?
                                                    <a href={ele.BackEndUrl} target="_blank" className="card-link">  <button className="btn btnn btn-sm rounded">  View Code
                             </button></a>

                                                    :

                                                    <a href={ele.frontEndUrl} target="_blank" className="card-link">  <button className="btn btnn btn-sm rounded">  View Code
                             </button></a>

                                            }
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            </div>

                        )


                    })
                }
            </div>
        </div>
    )
}