import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Personalinfo from './ components/personalinfo.jsx'
import Skillsinfo from './ components/skills.jsx'
import Workex from './ components/workex.jsx'
import Educationalinfo from './ components/educationalinfo.jsx'
import DisplayCV from './ components/displayCV.jsx'



function App(){

return(

<div>  

  <div className='containerOfAll'>

    
      <div className='container' style={{marginLeft:'1rem'}}>   

        <Personalinfo/>
        <Skillsinfo/>
        <Workex/>
        <Educationalinfo/>
        <DisplayCV/>

        

      <button className='clear'>Clear</button>
      </div>

      
      
  </div>
</div>
 
)



}

export default App
