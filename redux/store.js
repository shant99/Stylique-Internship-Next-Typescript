import { configureStore } from "@reduxjs/toolkit"
import vendorsPageSlice from './slice/vendorsPageSlice';

const store = configureStore({
    reducer: {
        vendorsPageSlice
    }
})

export default store