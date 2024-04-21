import {useState} from 'react'


export default function Personalinfo(){
    const [personalInfo,setpersonalInfo]=useState('')

    const handleChange=(event)=>{
        setpersonalInfo(event.target.value)

    }

    return(
        <div className="personalinfo-container">
            <div className="personalinfo">
                <input
                type="text"
                placeholder="Enter your Personal Details"
                value={personalInfo}
                onChange={handleChange}
                />
                <p>{personalInfo}</p>
            </div>


        </div>
    )
}

