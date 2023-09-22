import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "../230921/src/counterSlice"
const store = configureStore({
    reducer:{
        counter:counterSlice.counter
    }
})

export default store