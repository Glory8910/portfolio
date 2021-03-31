import React , {useState} from "react"
import "./Navbar.css"
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



import SubjectIcon from '@material-ui/icons/Subject';



export default function Navbar(props) {

  return (
    <>
      <nav >


        <input id="check" type="checkbox">
        </input>
        <label className="checkicon" for="check">
          <SubjectIcon fontSize="large" />
        </label>


        <label><strong>S Glory Jayaseeli</strong></label>

        <ul>



          <li><Link className="anch" to="Skills" spy={true} smooth={true} duration={500}>
            Skills
        </Link></li>

          <li><Link className="anch" to="Education" spy={true} smooth={true} duration={500}>
            Education
        </Link></li>

          <li><Link className="anch" to="Projects" spy={true} smooth={true} duration={500}>
            Projects
        </Link></li>

          <li><Link className="anch" to="Contact" spy={true} smooth={true} duration={500}>
            Contact
        </Link></li>


        </ul>




      </nav>


    </>
  )



}