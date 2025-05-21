import React, { useState, useRef, useEffect } from "react";
import "./SearchBar.css";
import searchIcon from "../../assets/icons/searchIcon.png";
import clearIcon from "../../assets/icons/clearButton.png";

export default function SearchBar() {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState(""); // New state for input value
    const searchBarRef = useRef(null);

    // Reset styles when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
                setIsFocused(false); // Reset to initial state
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleClear = () => {
        setIsFocused(false);
        setInputValue(""); // Clear the input text
    };

    return (
        <div className="searchBar" ref={searchBarRef}>
            {!isFocused && <img src={searchIcon} className="searchIcon" alt="Search" />}
            <input
                type="text"
                name="usernameInput"
                id="usernameInput"
                placeholder="Find a developer using username"
                value={inputValue} // Controlled input
                onChange={(e) => setInputValue(e.target.value)} // Update state on change
                onFocus={() => setIsFocused(true)}
            />
            {isFocused && (
                <img
                    src={clearIcon}
                    className="clearButton"
                    alt="Clear search"
                    onClick={handleClear} // Use the clear handler
                />
            )}
        </div>
    );
}