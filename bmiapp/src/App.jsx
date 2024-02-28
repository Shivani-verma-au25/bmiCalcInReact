import { useState } from 'react'
import './App.css'
import Bmi from './compnents/Bmi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-700 w-full '>
      <h1 className=' text-[3vw] font-bold' >BMI CALCULATOR</h1>
      <Bmi />
    </div>
  )
}

export default App
