import React from "react";

const [contactInfo,setcontactInfo]=useState({
    firstName:"John",
    secondName:"Doe",
    mobileNumber:"9206153526",
    email:"johndoe@yahoo.com",


  })
const Personalinfo=()=>{
    return (
        <div>
            <h2>{contactInfo.firstName+secondName}</h2>
        </div>
    )
}

export default Personalinfo;