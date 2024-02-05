import React from 'react'
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Route, Routes,useNavigate} from "react-router-dom";


//Redux
import { useSelector,useDispatch } from 'react-redux'
import {Inc,Dec,Sec,Cart} from './states/reducer/index'

function One() {
  const curState = useSelector((state) => state.numberWala)
  const navigate = useNavigate()

  // actions
  const dispatch = useDispatch();

  //handle Increment
  const handleIncrement = () => {
    dispatch(Inc());
  };

  return (
   <>
   <h1>Home Page</h1>

   <div style={{width:'50%', height:'200px', backgroundColor:'#D2E9E9', margin:'0 auto'}}>
   <h2 style={{textAlign:'center'}}>Cart Items : {curState} </h2>
  
   <Button onClick={handleIncrement} variant="primary">Add</Button>
   <Button  onClick={()=>dispatch(Dec())} variant="danger">Remove</Button>
   <Button variant="dark" onClick={()=>dispatch(Sec())}> +10</Button>

    <Button variant='primary' onClick={()=>dispatch(Cart())}> Flipkart Cart</Button>
   
   </div>
    
   </>
  )
}

export default One