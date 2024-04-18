import React, { useState } from 'react' 



function Personalinfo(){


const [contactInfo,setcontactInfo]=useState({
    firstName:"John",
    secondName:"Doe",
    mobileNumber:"9206153526",
    email:"johndoe@yahoo.com",


  })
    return (
        <div>
            <h2>{contactInfo.firstName}</h2>
        </div>
    )
}

export default Personalinfo;