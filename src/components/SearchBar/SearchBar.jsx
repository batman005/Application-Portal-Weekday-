import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { searchCompany } from "../../redux/features/jobDetails/jobDetailsSlice"; // Import your searchCompany action

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");

    // Define a debounced function to dispatch search action
    const debouncedSearch = useCallback(
        debounce((query) => {
            dispatch(searchCompany(query));
        }, 300), // Adjust debounce time as needed
        []
    );

    // Function to handle input change
    const handleChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        debouncedSearch(query);
    };

    // Debounce function
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    return (
        <div
            className={` bg-gray-50 border border-gray-300 rounded-sm `}
            style={{ minHeight: "38px" }}
        >
            <input
                type="text"
                placeholder="Search Company name"
                className="flex justify-center items-center outline-none border-none bg-transparent pt-1 px-2"
                value={searchQuery}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;