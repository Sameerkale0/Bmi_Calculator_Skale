import React, {useState} from 'react'
import './index.css'
function App() {

//state
const [weight, setWeight]= useState(0)
const [height, setHeight]= useState(0)
const [bmi, setBmi]= useState('')
const [message, setMessage]= useState('')


let calcBmi = (event)=>{
  //prevent submitting (prevents it from being submitted to our server)
  event.preventDefault()

  if(weight===0 || height===0){
    alert('Please enter a valid weight and height')
  }
  else{
    let bmi=(weight/ (height*height))  //1m=3.28feet   1f= 0.3048m
    setBmi(bmi.toFixed(1))

   //logic for message
   
   if(bmi<25){
     setMessage("You are underweight")
   } else if(bmi>=25 && bmi<30){
     setMessage('You are healthy weight')
   } else{
     setMessage('You are overweight')
   }

  }
}
//show img based on bmi calN
let imgSrc;


if(bmi<1){
  imgSrc=null
} else{
    if(bmi<25){
      imgSrc= require('../src/assets/under.jpeg')
    } else if(bmi>=25 && bmi <30){
      imgSrc= require('../src/assets/healthy.jpeg')
    } else{
      imgSrc= require('../src/assets/over.jpeg')
    }
  }

let reload= () =>{
  window.location.reload()
}

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (inches)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'> Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'> Reload</button>

          </div>
        </form>

        <div className='center'>
        <h3>Your BMI is:{bmi}</h3>
        <p>{message}</p>
        </div>
        <div className='img-container'>
          <img src={imgSrc} ></img>
        </div>
      </div>
    </div>
  );
}

export default App;
