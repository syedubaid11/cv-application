import { useState } from "react";

export default function Workex(){


    const [workEx,setworkEx]=useState("")

    const handleChange=(event)=>{
        setworkEx(event.target.value)
    }
    return(
        <div className="workexcontainer">
            <div className="workexinfo">
                <h3>Experience</h3>
                <input
                type="text"
                placeholder="Enter your Experience"
                value={workEx}
                onChange={handleChange}
                />
                <p>{workEx}</p>
            </div>


        </div>
    )
}