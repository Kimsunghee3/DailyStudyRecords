import React from 'react'
import { Provider, } from 'react-redux';
import { createSlice, configureStore } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name:'counterSlice',
  initialState:{value:0},
  reducers:{
    up:(state,action)=>{
      state.value = state.value + state.payload
    }
  }
})

function Counter(){
  return <div>
    <button onClick={()=>{
      
    }}>+</button>0
  </div>
}

const store = configureStore({
  reducer:{
    
  }
})

function App() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
}

export default App
