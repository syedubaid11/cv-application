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

  <div className='container' style={{marginLeft:'1rem'}}>   

  <Personalinfo/>
  <Skillsinfo/>
  <Workex/>
  <Educationalinfo/>

  <button className='clear'onClick={}>Clear</button>
 </div>
 
)



}

export default App
