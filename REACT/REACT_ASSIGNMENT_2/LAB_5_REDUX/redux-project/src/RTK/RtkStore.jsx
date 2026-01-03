import { configureStore } from '@reduxjs/toolkit'
import RtkReducer from "./RtkReducer"

const RtkStore = configureStore({
    reducer:{
        "Counter":RtkReducer
    }
})

export default RtkStore