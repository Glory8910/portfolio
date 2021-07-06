import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import Navbar from './Navbar/Navbar';
import About from "./About/About"
import Skills from "./Sklills/Skills"
import Work from "./Work/Work"
import Education from './Education/Education';
import Projects from "./Projects/Projects"
import Contact from "./Contact/Contact"
import Topscroll from "./Topscroll/Topscroll"

import { fab, faGithub, faHtml5, faCss3, faJs, faNodejs, faReact } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faPhone, faEnvelope, faHandPointer, faDatabase, faCoffee, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faPhoneSquareAlt, faHandPointer, faCoffee, faEnvelope, fab, faHtml5, faDatabase)



function App() {


  return (

    <>

      <Navbar  />

      <Topscroll />
   
        <About />
        <Skills></Skills>

        <Education />
      
        <Projects />
          {/* <Work></Work> */}
        <Contact />

     
      {/* <div className="backtotop"> <FontAwesomeIcon icon={['fas', 'hand-pointer']} size="3x" /></div> */}


    </>

  )
}

export default App;
