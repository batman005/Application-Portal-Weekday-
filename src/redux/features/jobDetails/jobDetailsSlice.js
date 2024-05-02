import { createSlice } from '@reduxjs/toolkit';

export const jobDetailsSlice = createSlice({
    name: 'jobDetails',
    initialState: {
        jobDetails: [],
        loading: true,
        error: null
    },
    reducers: {
        getJobDetailsSuccess: (state, action) => {
            state.jobDetails = action.payload;
            state.loading = false;
            state.error = null;
        },
        jobError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

// Export generated action creators
export const { getJobDetailsSuccess, jobError } = jobDetailsSlice.actions;

// Export reducer function
export default jobDetailsSlice.reducer;
