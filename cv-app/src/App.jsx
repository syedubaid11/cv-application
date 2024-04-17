import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App(){
  const [contactInfo,setcontactInfo]=useState({
    firstName:"John",
    secondName:"Doe",
    mobileNumber:"9206153526",
    email:"johndoe@yahoo.com",


  })
return(
  <div>
    <h1>{contactInfo.firstName}</h1>
  </div>
)

}

export default App
