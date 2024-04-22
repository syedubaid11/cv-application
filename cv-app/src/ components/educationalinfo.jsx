import { useState } from "react";


export default function Educationalinfo(){
    const[eduInfo,seteduInfo]=useState("")

    const handleChange=(event)=>{
        seteduInfo(event.target.value)
    }

    return(
        <div className="educontainer">
            <div className="eduinfo">
                <h1>Enter Your Educational Background</h1>
                <input
                type="text"
                placeholder="Enter your Educational Background"
                value={eduInfo}
                onChange={handleChange}
                />
                <div className="displayEduInfo">
                    <p>{eduInfo}</p>

                </div>
            </div>


    </div>


    )
}