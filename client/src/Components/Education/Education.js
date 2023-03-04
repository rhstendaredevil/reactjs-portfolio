import React from 'react';
import './Education.css';

import { 
    VerticalTimeline, 
    VerticalTimelineElement 
}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {

    const data = [

        {
            name:'University of Mumbai',
            degree:'M.Sc in Computer Science',
            year:'2021-2023',
            des:'M.Sc. in Computer Science is a two-year post-graduate degree programme designed to build human resources with key competencies in a wide range of computer science major areas. Software engineering, system engineering, natural computation processing, mathematical principles, and machine learning are all included in this Computer Science programme.'
        },

        {
            name:'Kohinoor Technical Institute',
            degree:'Dimploma in Computer Hardware and Networking',
            year:'2020-2021',
            des:'Contract maintenance of computers for companies as well as individuals (home PCs). Sales of computers, computer parts and peripherals. Assembly of computers and computer peripherals. Designing the Network Infrastructure. Maintenance of the Networks. Construction and Use of the Network. Diagnosing and Trouble Shooting Networks.'
        },

        {
            name:'University of Mumbai',
            degree:'B.Sc in Computer Science',
            year:'2016-2019',
            des:'B.Sc. Computer Science is a three years undergraduate programme. Computer Science is a field that deals with the theory of computing, programming languages, database systems, networking, software engineering , artificial intelligence.'
        },
    ]

    const colors = [
        "#119003",
        "#790B5D",
        "#0B7179",
     ];


  return (
    <div className='container education-section' id='education'>
        <div className='section-title'>
            <h5>Education</h5>
            <span className='line'></span>
        </div>

        <div className='timeline-section'>

<VerticalTimeline lineColor='#36b3d6'>

{data.map((item, index)=>(

<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: colors[index], color: '#fff' }}
contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
date={item.year}
dateClassName='date-class'
iconStyle={{ background: colors[index], color: '#fff' }}
icon={<FaGraduationCap />}>

    <h3 className="vertical-timeline-element-title">
        {item.name}
    </h3>
    <h5 className="vertical-timeline-element-subtitle" style={{color:'#c3d5de'}}>
        {item.degree}
    </h5>
    {/*<span>if you want more description</span> */}
    <p>{item.des}</p>

</VerticalTimelineElement>

))}

</VerticalTimeline>

</div>

    </div>
  )
}

export default Education