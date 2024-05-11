import {useState} from 'react'
import DisplayCV from './displayCV'


export default function Skillsinfo(){
    const [skillInfo,setskillInfo]=useState('')

    const handleChange=(event)=>{
        setskillInfo(event.target.value)

    }

    return(
        <div className="Infocontainer">
            <div className="skillinfo">
                <h3>Skills</h3>
                <input
                type="text"
                placeholder="Enter your Skills"
                value={skillInfo}
                onChange={handleChange}
                />

                </div>


        </div>
    )
    
}