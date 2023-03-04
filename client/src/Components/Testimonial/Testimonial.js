import React from 'react';
import './Testimonial.css';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {

    const data = [

        {
            name:'Future Ready Talent',
            position: 'Mentor',
            des:'Succesfully completed internship.',
            img:"https://qph.cf2.quoracdn.net/main-qimg-1c6ab384df5292db1aa1f55d7f05dc3a-pjlq",
            
        },

        {
            name:'Rakesh',
            position: 'Manager',
            des:'Hardworking, Interpersonal skills, ability to troubleshoot any service request for enterprise',
            img:'https://cdn-icons-png.flaticon.com/512/149/149071.png'
        },
    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        initialSlide: 0,
        autoplay: true,
        rows:1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };



  return (
    <div className='container testmonial-section' id='testmonial'>

        <div className='section-title'>
            <h5>Testimonial</h5>
            <span className='line'></span>
        </div>

        <div className='testimonial-slider'>
            <Slider {...settings}>
                {data.map((item,index) => (
                    <div className='content-slider-main'>
                        <div className='content-slider' key={index}>
                        <img
                        src={item.img} 
                        alt='testimonial image' 
                        className='center-image'
                        />

                        <p>{item.name}</p>
                        <p>{item.position}</p>
                        <p>{item.des}</p>
                    </div>
                    </div>
                ))}
            </Slider>
        </div>
        
    </div>
  )
}

export default Testimonial