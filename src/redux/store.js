import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Loginreducer";

const store=configureStore({
    reducer:{loginReducer},
    devTools:true,
})

export default store