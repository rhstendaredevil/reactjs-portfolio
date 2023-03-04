import React from 'react';
import ProjectList from './ProjectList';
import './Project.css';

const Project = () => {

    const data = [

        {
            name:'Portfolio Project',
            des:'React Portfolio Website, React Context API, Send E-mail from React App, React Hooks, React Packages, React theme.',
            projectlink:'https://github.com/prajapatiravishankar/myportfolio-React.JS',
            techused: [
                {
                    techname:'Node.JS'
                },
                {
                    techname:'React.JS'
                },
                {
                    techname:'Context API'
                },
                {
                    techname:'React Hooks'
                },

            ]

        },

        {
            name:'covid19patientdetailsmanagementsystem',
            des:'A responsive web-app with aesthetic and accessible UI for managing COVID patients of a certain hospital built using Django and Bootstrap framework. Deployed this project on Microsoft Azure and used 1. Azure WebApp, 2. Azure App , 3. Compute azure services.',
            projectlink:'https://github.com/ravishankarprajapati/covid19patientdetailsmanagementsystem',
            techused: [
                {
                    techname:'HTML/CSS'
                },
                {
                    techname:'Python'
                },
                {
                    techname:'Django/DIR'
                },
                {
                    techname:'SQLite'
                },

            ]

        },

        {
            name:'Real Time Face Recognition',
            des:'A real time face recognition system is capable of identifying person from a video frame.',
            projectlink:'https://github.com/ravishankarprajapati/OpenCV',
            techused: [
                {
                techname:'Python'
                },
                {
                    techname:'OpenCV'
                },
            ]

        },

        {
            name:'tkinter-paint-program',
            des:'Graphical User Interface App with python and Tkinter',
            projectlink:'https://github.com/ravishankarprajapati/tkinter-paint-program',
            techused: [
                {
                    techname:'Python'
                },
                {
                    techname:'Tkinter'
                },

            ]

        },

    ]

  return (
  <div className='container project-section' id='project'>
    <div className='section-title'>
        <h5>Projects</h5>
        <span className='line'></span>

    </div>
    
    <div className='row'>
        {data.map((item, index) =>(
       
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12' key={index}>
            <ProjectList {...item}/>
        </div>
        
        ))}


    </div>
   
        
    </div>
  )
}

export default Project