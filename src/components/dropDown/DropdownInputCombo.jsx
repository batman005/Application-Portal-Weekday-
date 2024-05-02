/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
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
    const dropdownRef = useRef(null);
    const dispatch = useDispatch();

    console.log(selectedOptions);

    const toggleOption = (option) => {
        const currentIndex = selectedOptions.indexOf(option);
        console.log(currentIndex);
        const newSelectedOptions = [...selectedOptions];
        console.log(newSelectedOptions);
        if (currentIndex === -1) {
            newSelectedOptions.push(option); // Not currently selected, so add it
        } else {
            newSelectedOptions.splice(currentIndex, 1); // Currently selected, so remove it
        }

        setSelectedOptions(newSelectedOptions);
        dispatch(setFilter({ filter: filterKey, value: newSelectedOptions }));
    };

    const handleClearAll = () => {
        setSelectedOptions([]);
        dispatch(clearFilters());
    };

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="mx-auto w-full max-w-lg">
            <div className="relative">
                <div
                    ref={dropdownRef}
                    className="inline-flex min-w-52 justify-between items-center bg-gray-50 border border-gray-300 rounded-sm p-1.5 whitespace-nowrap overflow-x-auto"
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
                                        toggleOption(option); // Use toggleOption here
                                    }}
                                    className="text-gray-800 p-1 hover:text-red-600 hover:bg-red-300 ml-1 rounded-sm"
                                >
                                    <RxCross2 />
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="flex items-center">
                            <div className="text-gray-400 text-sm ">{placeholder}</div>
                        </div> // Placeholder text
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
                        {options.map((option) => (
                            <li
                                key={option}
                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => toggleOption(option)}
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