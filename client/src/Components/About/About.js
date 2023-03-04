import React from 'react';
import './About.css';
import ProfilePic from '../../Image/ravishankar.jpg';


const About = () => {
  return (
    <div className='container about-section' id='about'>
      
        <div className='row'>

            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>

                <div className='about-image'>
                    <img src={ProfilePic} alt='Profile Photo'/>
                </div>

            </div>

            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>

                <div className='about-details'>
                    <div className='about-title'>
                        <h5>About Me</h5>
                        <span className='line'></span>

                    </div>

                    <p>

                        Hello, I’m Ravishankar Prajapati. I have completed a Bachelor of Computer Science and currently pursuing a Master of Computer Science.
                        As an aspiring Full Stack Developer, I'm working on Full Stack developer skills such as HTML/CSS, JavaScript, Node.JS, Core Java, Python, Django/DIR, MySQL, MongoDB, and API. And I'm looking for Front-end, Back-end, and Full-stack developer internship.

                    </p>

                </div>

            </div>

        </div>
       

    </div>
  )
}

export default About