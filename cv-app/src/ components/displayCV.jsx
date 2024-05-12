import {useState} from 'react'


export default function DisplayCV(){
    const [cvInfo,setcvInfo]=useState({
        personalinfo:"Joe Doe",
        personalinfoContact:"joedoe@gmail.com",
        skillsinfo:" ",
        educationalinfo:"",
        workexinfo:"",
        summary:""
    })

function handleChange(event){
        const name=event.target.name
        const value=event.target.value
        setcvInfo({
            ...cvInfo,
            [name]:value
        }
        )

    }

    return(
        <div className='all'>
          <div className='input-container'>  
                <div>
                    <h3>Personal Details</h3>
                    <input
                    type="text"
                    placeholder="Enter your Personal Details"
                    name="personalinfo"
                    value={cvInfo.personalinfo}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <h3>Contact Info</h3>
                    <input
                    type="text"
                    placeholder="Enter your Contact Details"
                    name="personalinfoContact"
                    value={cvInfo.personalinfoContact}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <h3>Skills</h3>
                    <input
                    type="text"
                    placeholder="Enter your Skills"
                    name="skillsinfo"
                    value={cvInfo.skillsinfo}
                    onChange={handleChange}
                   />
                </div> 
                <div>
                    <h3>Educational Info</h3>
                    <input
                    type="text"
                    placeholder="Enter your Skills"
                    name="educationalinfo"
                    value={cvInfo.educationalinfo}
                    onChange={handleChange}
                   />
                </div> 
                <div>
                    <h3>Work Experience</h3>
                    <input
                    type="text"
                    placeholder="Enter your Skills"
                    name="workexinfo"
                    value={cvInfo.workexinfo}
                    onChange={handleChange}
                   />
                </div> 
                <div className='summary'>
                    <h3>Summary</h3>
                    <input
                    type="text"
                    placeholder="Enter Summary"
                    name="summary"
                    value={cvInfo.summary}
                    onChange={handleChange}
                    />
                </div>

          </div>

          <div className='cv-display-container'>
            <div className='heading'>
                <h1>{cvInfo.personalinfo}</h1>
                <h3>{cvInfo.personalinfoContact}</h3>
            </div>
                <h3>{cvInfo.skillsinfo}</h3>
                <p>{cvInfo.educationalinfo}</p>
                <p>{cvInfo.workexinfo}</p>
                <p>{cvInfo.summary}</p>
          </div>   

         
        </div>

    
        
    )
}


