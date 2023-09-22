import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux';
import counterSlice from '../../230922/counterSlice';

const store = configureStore({
  reducer:{
    counter:counterSlice.reducer
  }
})
const Counter=()=>{
  const dispatch = useDispatch()
  const count = useSelector(state=>{
    return state.counter.value
  })
  return <div>
    <button onClick={()=>{
      dispatch({type:'counterSlice/up', step:2})
  }}>+</button>{count}
  </div>
}
function App() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
}

export default App;
