import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './ components/workex.jsx'



function App(){

const[info,setInfo]=useState('');

const handleChange=(event)=>{
  setInfo(event.target.value)
}
 
return(
 <div>
  <input 

  type="text"
  placeholder='Enter Contact Info'
  value={info}
  onChange={handleChange}

  />
   
  <p style={{marginTop:'5rem',backgroundColor:'white'}}>{info}</p>
 </div>
 
)

}

export default App
