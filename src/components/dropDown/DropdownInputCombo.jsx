/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa";
import {
    clearFilters,
    setFilter,
} from "../../redux/features/jobDetails/jobDetailsSlice";

function DropdownInputCombo({ placeholder, options, filterKey }) {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const dropdownRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        // event listener for component mounting
        document.addEventListener("click", handleOutsideClick);

        // Clean up 
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const handleOutsideClick = (e) => {
        // Close dropdown if the click is outside the dropdown menu
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setDropdownOpen(false);
        }
    };

    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(inputValue.toLowerCase())
    );

    const toggleOption = (option) => {
        const currentIndex = selectedOptions.indexOf(option);
        const newSelectedOptions = [...selectedOptions];
        if (currentIndex === -1) {
            newSelectedOptions.push(option);
        } else {
            newSelectedOptions.splice(currentIndex, 1);
        }
        setSelectedOptions(newSelectedOptions);
        dispatch(setFilter({ filter: filterKey, value: newSelectedOptions }));
    };

    const handleClearAll = () => {
        setSelectedOptions([]);
        setInputValue("");
        dispatch(clearFilters());
    };

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setDropdownOpen(!dropdownOpen);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleOptionClick = (option) => {
        toggleOption(option);
        setInputValue(""); // Clear input 
    };

    return (
        <div className="mx-auto w-full max-w-lg">
            <div className="relative">
                <div
                    ref={dropdownRef}
                    className={`inline-flex min-w-52 justify-between items-center bg-gray-50 border border-gray-300 rounded-sm p-1.5 whitespace-nowrap overflow-x-auto ${dropdownOpen ? 'border-blue-500' : ''}`}
                    style={{ minHeight: "38px" }}
                    onClick={toggleDropdown}
                >
                    {selectedOptions.length > 0 ? (
                        selectedOptions.map((option) => (
                            <div
                                key={option}
                                className="flex items-center justify-between bg-gray-200 text-xs pl-1 rounded-sm mr-1"
                            >
                                <span>{option}</span>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleOption(option);
                                    }}
                                    className="text-gray-800 p-1 hover:text-red-600 hover:bg-red-300 ml-1 rounded-sm"
                                >
                                    <RxCross2 />
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="flex items-center">
                            <input
                                type="text"
                                placeholder={placeholder}
                                value={inputValue}
                                onChange={handleInputChange}
                                className="outline-none border-none px-1"
                            />
                        </div>
                    )}
                    <button
                        onClick={toggleDropdown}
                        className="text-gray-300 hover:text-gray-500 flex items-center"
                    >
                        {selectedOptions.length > 0 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleClearAll();
                                }}
                                className="text-gray-300 hover:text-gray-500 ml-3"
                            >
                                <RxCross2 />
                            </button>
                        )}
                        <div className="border-r border-gray-300 h-6 mx-2"></div>
                        <FaAngleDown />
                    </button>
                </div>
                {dropdownOpen && (
                    <ul
                        className="absolute bg-white border border-gray-300 rounded-lg w-full mt-1 z-10"
                        style={{
                            width: dropdownRef.current
                                ? dropdownRef.current.offsetWidth
                                : "100%",
                        }}
                    >
                        {filteredOptions.map((option) => (
                            <li
                                key={option}
                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default DropdownInputCombo;
