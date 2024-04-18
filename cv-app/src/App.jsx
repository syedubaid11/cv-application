import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Personalinfo from './ components/personalinfo'



function App(){
  

  const[schoolName,setschoolName]=useState({
    schoolName:'css',
    universityName:'',

  })

  const [experienceInfo,setexperienceInfo]=useState({

  })

  const [skillsInfo,setskillsInfo]=useState({
    skills:'',


  })

return(
  <div>
      <h1>  {schoolName.schoolName}.</h1>
    <Personalinfo/>  

  </div>
)

}

export default App
