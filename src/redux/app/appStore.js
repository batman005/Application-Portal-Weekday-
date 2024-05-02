import { configureStore } from '@reduxjs/toolkit';
import jobDetailsReducer from '../features/jobDetails/jobDetailsSlice'; 

const appStore = configureStore({
    reducer: {
        jobDetails: jobDetailsReducer, // slice reducer 
    },
});

export default appStore;
