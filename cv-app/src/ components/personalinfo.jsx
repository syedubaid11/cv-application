import {useState} from 'react'


export default function Personalinfo(props){
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
                
                <p></p>
            </div>


        </div>
    )
}

