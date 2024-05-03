import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the job details slice
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
        searchQuery: "",
        loading: true,
        error: null,
    },
    reducers: {
        getJobDetailsSuccess: (state, action) => {
            state.allJobDetails = action.payload;
            state.filteredDetails.jdList = [...action.payload.jdList]; // Ensure all data is visible initially
            state.loading = false;
        },

        setFilter: (state, action) => {
            const { filter, value } = action.payload;
            state.filters[filter] = value;
            applyFilters(state);
        },

        clearFilters: (state, action) => {
            const filterKey = action.payload; // Key of the filter to clear
            if (filterKey) {
                state.filters[filterKey] = Array.isArray(state.filters[filterKey])
                    ? []
                    : null;
            } else {
                // If no specific filter is provided, reset all filters
                state.filters = {
                    jobRole: [],
                    minExp: null,
                    numberOfEmployees: null,
                    location: [],
                    minJdSalary: null,
                };
            }
            state.searchQuery = ""; // Optionally clear search query as well
            applyFilters(state); // Reapply filters to update the view
        },

        searchCompany: (state, action) => {
            state.searchQuery = action.payload.toLowerCase();
            applyFilters(state);
        },
        jobError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

// Function to filter jobs based on the applied filters and search query
function applyFilters(state) {
    const { searchQuery, filters, allJobDetails } = state;
    let filtered = [...allJobDetails.jdList]; // Start with a copy of all jobs

    if (searchQuery) {
        filtered = filtered.filter((job) =>
            job.companyName.toLowerCase().includes(searchQuery)
        );
    }

    // Check if any filters are set
    const areFiltersActive = Object.values(filters).some((value) => {
        if (Array.isArray(value)) {
            return value.length > 0; // For array filters, check if not empty
        }
        return value != null; // For other filters, check if not null
    });

    if (areFiltersActive) {
        filtered = filtered.filter(
            (job) =>
                (filters.jobRole.length === 0 ||
                    filters.jobRole.includes(job.jobRole)) &&
                (!filters.minExp || job.minExp >= filters.minExp) &&
                (!filters.numberOfEmployees ||
                    job.numberOfEmployees === filters.numberOfEmployees) &&
                (filters.location.length === 0 ||
                    filters.location.includes(job.location)) &&
                (!filters.minJdSalary || job.minJdSalary >= filters.minJdSalary)
        );
    }

    state.filteredDetails.jdList = filtered;
}

export const {
    getJobDetailsSuccess,
    setFilter,
    clearFilters,
    searchCompany,
    jobError,
} = jobDetailsSlice.actions;
export default jobDetailsSlice.reducer;