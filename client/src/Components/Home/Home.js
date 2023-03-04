import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import MyCV from './RavishankarPrajapati.pdf'

import { MdDarkMode, MdLightMode } from "react-icons/md";

import {Link} from 'react-scroll';



function Home({theme, changeTheme}) {
  return (
    <div className='container-fluid home' id='home'>

      <div className='theme-change' onClick={changeTheme}>

        {theme === 'light' ? (<p><MdDarkMode size={40}/></p>)
        :
        (<p className='sun-theme-icon'><MdLightMode size={40}/></p>)}
        
      </div>

      <div className='container home-content'>

       
        <h1>Hi i'm Ravishankar Prajapati</h1>
        <h3>
          <Typewriter
            options={{
              strings: [
                'Full-Stack Software Developer', 
                'Web Develper',
                'UX/UI Designer',
                'MERN/MEAN Stack Developer',
              ],
              autoStart: true,
              loop: true,
              delay:5
            }}
          />
        </h3>
       


          <div className='button-for-action'>

          <Link to='contactsection'
             spy={true}
             smooth={true}
             duration={100}
             offset={-100}
            >

            <div className='hire-me-button'>

              Hire Me

            </div>

            </Link>

            <div className='get-resume-button'>
              <a href={MyCV} download='CV_RavishankarPrajapati.pdf'>
              Get Resume
              </a>
            </div>


          </div>
      </div> 
    </div>
  )
}

export default Home