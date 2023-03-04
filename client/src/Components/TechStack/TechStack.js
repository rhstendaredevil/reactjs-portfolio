import React,{useState} from 'react';
import './TechStack.css'


const TechStack = () => {

    const data = [
        {
            name: 'Full Stack Web Developer'
        },
        {
            name: 'HTML'
        },
        {
            name: 'CSS'
        },
        {
            name: 'JavaScript'
        },
        {
            name: 'React.JS'
        },
        {
            name: 'React-Native'
        },
        {
            name: 'Node.js'
        },
        {
            name: 'Core Java'
        },
        {
            name: 'Python'
        },
        {
            name: 'Django/DIR'
        },
        {
            name: 'Bootstrap'
        },
        {
            name: 'UX/UI Design - Figma'
        },
        {
            name: 'MySQL'
        },
        {
            name: 'MongoDB'
        },
        {
            name: 'Version Control Git/GitHub'
        },
        
       
    ]

    const colors = [
        "#F1C40F",
        "#4B088A",
        "#8181F7",
        "#FE2EF7",
        "#585858",
        "#800000",
        "#0088FE",
        "#00C49F",
        "#FFBB28",
        "#FF8042",
        "#001CCE",
        "#00C79F",
        "#FFBB24",
        "#FF1042",
        "#FF1042",
      ];

      const [showMoreTechStack, setShowMoreTechStack] = useState(9);

      const loadMore = () =>{
        setShowMoreTechStack((prev)=>prev+3);
      }

      return (
    <div className='container techstack-section' id='techstack'>

        <div className='section-title'>

            <h5>Tech-Stack</h5>
            
            <span className='line'></span>


        </div>

        <div className='row'>
            {data.slice(0, showMoreTechStack).map((item,index) =>(
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
                    <div className={index===0?'tech-content-marked tech-content':
                     'tech-content'}>

                        <span className='tech-number' style={{backgroundColor: colors[index]}}>
                            {index+1}
                        </span>

                    <p>{item.name}</p>
                    </div>
                </div>
            ))}

        </div>

        {showMoreTechStack >= data.length ? null : (
            <span className='load-more-tech-stack' onClick={loadMore}>
            Load More
        </span>
        )}
    </div>
  )
}

export default TechStack