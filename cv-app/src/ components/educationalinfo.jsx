import { useState } from "react";


export default function Educationalinfo(){
    const[eduInfo,seteduInfo]=useState("")

    const handleChange=(event)=>{
        seteduInfo(event.target.value)
    }

    return(
        <div className="educontainer">
            <div className="eduinfo">
                <h3>Educational Background</h3>
                <input
                type="text"
                placeholder="Enter your Educational Background"
                value={eduInfo}
                onChange={handleChange}
                />
                <div className="displayContent">
                    <div className="displayEduInfo">
                      <p>{eduInfo}</p>
                    </div>

                </div>
            </div>


    </div>


    )
}