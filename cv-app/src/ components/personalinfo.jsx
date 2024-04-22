import {useState} from 'react'


export default function Personalinfo(){
    const [personalInfo,setpersonalInfo]=useState('')

    const handleChange=(event)=>{
        setpersonalInfo(event.target.value)

    }

    return(
        <div className="Infocontainer">
            <div className="personalinfo">
                <h1>Enter Your Personal Details</h1>
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

