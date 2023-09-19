import React from "react"
import {createStore} from "redux"
import {Provider, useSelector, useDispatch} from "react-redux"
import {createSlice, configureStore} from "@reduxjs/toolkit"
const counterSlice = createSlice({
  name:'counterSlice',
  initialState:{value:0},
  reducers:{
    up:(state, action)=>{
      state.value = state.value + action.step
    }
  }
})
const store = configureStore({
  reducer:{
    counter:counterSlice.reducer
  }
})

function Counter(){
  const dispatch = useDispatch()
  const count = useSelector(state=>{
    console.log(state)
    return state.counter.value
  })
  return <div>
    <button onClick={()=>{
      dispatch({type:'counterSlice/up',step:2})
    }}>+</button>{count}
  </div>
}

function App() {
  return ( 
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
