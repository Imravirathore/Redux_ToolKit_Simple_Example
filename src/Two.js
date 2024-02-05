import React from 'react'
//Redux
import { useSelector,useDispatch } from 'react-redux'
import {Inc,Dec} from './states/reducer/index'

function Two() {
  const curState = useSelector((state) => state);
console.log('my staste',curState)
  return (
<>
    <h1>Two</h1>
   <h2 style={{textAlign:'center'}}>Cart Items : {curState.numberWala} </h2>

   
</>    
  )
}

export default Two