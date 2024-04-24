import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Personalinfo from './ components/personalinfo.jsx'
import Skillsinfo from './ components/skills.jsx'
import Workex from './ components/workex.jsx'
import Educationalinfo from './ components/educationalinfo.jsx'



function App(){


return(

<div>  

  <div className='containerOfAll'>

    
      <div className='container' style={{marginLeft:'1rem'}}>   

      <Personalinfo/>
      <Skillsinfo/>
      <Workex/>
      <Educationalinfo/>

      <button className='clear'>Clear</button>
      </div>

      <div className='displayinfocontainer' style={{marginLeft:'8rem'}}>
        
      </div>
      
  </div>
</div>
 
)



}

export default App
