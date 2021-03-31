import React, { useEffect, useState } from "react"
import "./Topscroll.css"
import { Link, Element, Scroll, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import { fab, faGithub, faHtml5, faCss3, faJs, faNodejs, faReact } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faPhone, faEnvelope, faHandPointer, faDatabase, faCoffee, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faPhoneSquareAlt, faHandPointer, faCoffee, faEnvelope, fab, faHtml5, faDatabase)



export default function Navbar() {
    const [visib, setvisib] = useState(false)
 

    return (
        <>
            {
                window.onscroll = () => {
                 
                    if (window.pageYOffset > 100) {
                        setvisib(true);
                    }
                    else if(window.pageYOffset<100){
                        setvisib(false)
                    }
                }

            }
            <div className="backtotop"

              


                onClick={() => { scroll.scrollToTop() }}> <FontAwesomeIcon 
                style={{ visibility: visib ? 'visible' : 'hidden' }} icon={['fas', 'hand-pointer']}
                    size={"2x"}
                    className="icon" /></div>


        </>
    )



}