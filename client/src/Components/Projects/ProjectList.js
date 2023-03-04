import React, {useState} from 'react';
import { FcExpand, FcCollapse } from 'react-icons/fc';

const ProjectList = ({name,des,projectlink,techused}) => {
    const [show, setShow] = useState(false);
    
    const handleShowandCollapse = () =>{
        setShow(!show);
    };

    const colors = [
        "#800000",
        "#FF8042",
        "#001CCE",
        "#4B088A",
        /*"#FF6347",
        "#FF1042",*/
     ];

  return (
    <div className={show ? 'poject-list-opened project-list' : 'project-lsit'}
    onClick={handleShowandCollapse} 
    onMouseEnter={()=> setShow(true)} 
    onMouseLeave={()=> setShow(true)}
    >

        <div className='title-and-collapse-option'>
            <h5>{name}</h5>
            <p>
                {show ? <FcCollapse size={20}/> : <FcExpand size={20}/>}
            </p>

        </div>

        <div className='description'>
        {show ? <p>{des}</p> : <p>{des.substring(0,150)}...</p>}
        </div>

        <div className='row'>
            {techused && techused.map((tech, index) =>(
                <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12' key={index}>

                    <div className='tech-used-in-project'>
                        <p style={{backgroundColor:colors[index]}}>{tech.techname}</p>
                    </div>

                </div>
            ))}

        </div>

        <div className='live-demo-button'>
            <a target='_' href={projectlink}>Live Demo</a>

        </div>

    </div>
  )
}

export default ProjectList