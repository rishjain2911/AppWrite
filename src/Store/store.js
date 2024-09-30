import { configureStore } from "@reduxjs/toolkit";
import reducers from "../Store/authSlice"


const store = configureStore({
    reducer : {
        reducer : reducers
    }
})



export default store;