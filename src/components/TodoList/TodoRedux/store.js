
import { todoReducer } from '../features/TodoSlice'
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer:{
       todos:todoReducer
    },
})