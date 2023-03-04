import React from 'react';
import './WorkExperience.css'

import { 
    VerticalTimeline, 
    VerticalTimelineElement 
}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import { MdGroupWork } from 'react-icons/md';

const WorkExperience = () => {

    const data = [
        {
            companyname: 'Future Ready Talent',
            position: 'Intern',
            des: '190+ hours self-paced learning focus on Azure Cloud Security skills, Microsoft and GitHub tools, Industry session and Successful project deployment on Microsoft Azure Portal.',
            year: '2022',

            techskills:[
                {
                    techname:'Microsoft Azure'
                },
                {
                    techname:'Cloud'
                },
                {
                    techname:'GitHub'
                },
                {
                    techname:'Python/Django'
                },
                {
                    techname:'Cloud Security'
                },
            ]
        },

        {
            companyname: 'Reliance Jio Infocomm Limited',
            position: 'Engineer',
            des: 'Coordinator, coordinate with team and assign work. Ensure material tracking and reconciliation management. Supervised radio frequency optimization related activities and meet customer conduct survey and provide feedback on netowork.',
            year: '2020-2022',

            techskills:[
                {
                    techname:'Networking'
                },
                {
                    techname:'Troubleshoot'
                },
                {
                    techname:'OpticalFiber'
                },
                {
                    techname:'Mapping'
                },
            ]
        },
     ];

     const colors = [
        "#15E811",
        "#F71111",
     ];


  return (
    <div className='container workexperience-section' id='WorkExperience'>

        <div className='section-title'>
            <h5>Work Experience</h5>
            <span className='line'></span>
        </div>

        <div className='timeline-section'>

        <VerticalTimeline lineColor='#FF1042'>
        {data.map((item, index)=>(
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: colors[index], color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date={item.year}
        dateClassName='date-class'
        iconStyle={{ background: colors[index], color: '#fff' }}
        icon={<MdGroupWork />}>

            <h3 className="vertical-timeline-element-title">
                {item.companyname}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
                {item.position}
            </h4>

            <div className='row'>

                {item.techskills.map((tec, index) => (
                
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                key={index}>
                    
                    <div className='tech-skills'>

                        <p>{tec.techname}</p>

                    </div>
    
                </div>
                ))}

            </div>

            <p>{item.des}</p>

        </VerticalTimelineElement>

        ))}

        </VerticalTimeline>

        </div>

    </div>
  )
}

export default WorkExperience