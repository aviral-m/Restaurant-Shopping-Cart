import {configureStore} from '@reduxjs/toolkit';
import itemcountSliceReducer from './itemcountSlice'

const store = configureStore({
    reducer: {
        itemcountSliceReducer,
    }
})

export default store;
