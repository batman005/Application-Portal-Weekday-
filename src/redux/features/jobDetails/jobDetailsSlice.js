import { createSlice } from "@reduxjs/toolkit";

export const jobDetailsSlice = createSlice({
    name: "jobDetails",
    initialState: {
        allJobDetails: [],
        filteredDetails: { jdList: [] },
        filters: {
            jobRole: [],
            minExp: null,
            numberOfEmployees: null,
            location: [],
            minJdSalary: null,
        },
        loading: true,
        error: null,
    },
    reducers: {
        getJobDetailsSuccess: (state, action) => {
            state.allJobDetails = action.payload;
            state.filteredDetails = action.payload; // Start with all data
            state.loading = false;
        },
        setFilter: (state, action) => {
            console.log(action);
            state.filters[action.payload.filter] = action.payload.value;
            state.filteredDetails.jdList = filterJobs(
                state.allJobDetails,
                state.filters
            ); // Filter jobs whenever filters change
        },
        clearFilters: (state) => {
            state.filters = {
                jobRole: [],
                minExp: null,
                numberOfEmployees: null,
                location: [],
                minJdSalary: null,
            };
            state.filteredDetails = state.allJobDetails;
        },
        jobError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});
function filterJobs(jobs, filters) {
    return jobs.jdList.filter((job) => {
        return (
            (filters.jobRole.length === 0 || filters.jobRole.includes(job.jobRole)) &&
            (!filters.minExp || job.minExp >= filters.minExp) &&
            (!filters.numberOfEmployees ||
                job.numberOfEmployees === filters.numberOfEmployees) &&
            (!filters.location.length || filters.location.includes(job.location)) &&
            (!filters.minJdSalary || job.minJdSalary >= filters.minJdSalary)
        );
    });
}

export const { getJobDetailsSuccess, setFilter, clearFilters, jobError } =
    jobDetailsSlice.actions;
export default jobDetailsSlice.reducer;