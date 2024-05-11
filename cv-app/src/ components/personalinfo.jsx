import {useState} from 'react'
import DisplayCV from './displayCV'


export default function Personalinfo(){
    const [personalInfo,setpersonalInfo]=useState('')

    const handleChange=(event)=>{
        setpersonalInfo(event.target.value)
        

    }

    return(
        <div className="Infocontainer">
            <div className="personalinfo">
                <h3>Personal Details</h3>
                <input
                type="text"
                placeholder="Enter your Personal Details"
                value={personalInfo}
                onChange={handleChange}
            
                />
            <DisplayCV name={personalInfo}/>
            </div>
        </div>
        
    )
}

