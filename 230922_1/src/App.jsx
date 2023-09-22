import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {up} from '../counterSlice';

function Counter(){
  const dispatch = useDispatch()
  const count = useSelector(state=>{
    return state.counter.value
  })
  return <div>
    <button onClick={()=>{
      dispatch(up(2))
    }}>+</button>{count}
  </div>
}

function App() {
  return (
    <div>
      <Counter/>
    </div>
  )
}

export default App
