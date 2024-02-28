import React, { useState } from 'react'


function Bmi() {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi,setBmi] = useState(null)
  const [category,setCategory] = useState("")
  const [suggation,setSuggetion] = useState("")

  const BmiResult = () =>{
    if(height == "" || weight == ""){
        alert("Please enter both Height and Weight.")
        return
    }

    const heightInMeters = height/100
    const bmiValue = (weight / (heightInMeters *heightInMeters)).toFixed(2)
    setBmi(bmiValue)
    console.log(bmiValue);

    let bmiCat = ""
    let bmiMess = ""
    if (bmi < 18.5) {
        bmiCat = "Underweight"
        bmiMess = "You may need to gain some weight."
    }else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCat = "Normal"
        bmiMess = "You have a healthy weight!"
    }else if(bmi >= 24.9 && bmi < 29.9){
        bmiCat = "Overweight"
        bmiMess = "You may need to lose some weight." 
    }else{
        bmiCat = "Obese"
        bmiMess = "You should consult with a healthcare provider for advice."
    }
    setCategory(bmiCat)
    setSuggetion(bmiMess)
  }

    
  return (
    <div className='w-full h-screen bg-zinc-900 flex justify-center flex-col items-center gap-4'>
        <div className='w-1/2 flex items-center flex-col gap-4 pb-4 bg-zinc-800 p-5 rounded-md'>
            <label className='w-full text-left text-white px-6 text-[2vw] font-semibold mr-10' htmlFor="">Height in meter</label>
            <input className='w-full text-[2vw] px-3 border-2 border-black rounded-md ' type="number" value={height} onChange={(e)=> setHeight(e.target.value)}  />
            <label className=' w-full text-[2vw] text-white  px-6 text-left font-semibold mr-10' htmlFor="">Weight in kg</label>
            <input className='w-full text-[2vw] px-2 border-2 border-black rounded-md ' type="number" value={weight} onChange={(e)=> setWeight(e.target.value)}  />
        </div>
        <div>
            <button onClick={BmiResult} className='text-white font-semibold text-[2vw] border-2 border-white px-9 py-2 rounded-md hover:bg-zinc-100 hover:text-zinc-900 transition ease-in-out'>Calculate</button>
        </div>
        <div className='flex justify-center flex-col items-start bg-zinc-800 p-4 rounded-lg  '>
            <p className='text-[2vw] text-white '>Your Bmi is : {bmi}</p>
            <p className='text-[2vw] text-white '>Category : {category}</p>
            <p className='text-[2vw] text-white '>Suggestion : {suggation}</p>
        </div>
            
       
    </div>
  )
}

export default Bmi