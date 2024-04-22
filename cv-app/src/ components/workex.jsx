import { useState } from "react";

export default function Workex(){


    const [workEx,setworkEx]=useState("")

    const handleChange=(event)=>{
        setworkEx(event.target.value)
    }
    return(
        <div className="workexcontainer">
            <div className="workexinfo">
                <h1>Enter Your Experience</h1>
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