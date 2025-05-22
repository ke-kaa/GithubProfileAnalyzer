import React, { useState, useRef, useEffect } from "react";
import "./SearchBar.css";
import searchIcon from "../../assets/icons/searchIcon.png";

export default function SearchBar({onSearch, error}) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() !== '') {
            onSearch(inputValue.trim());
        }
    };

    return (
    <div >
        <form onSubmit={handleSubmit} className="searchBar" >
            <input 
            type="text"
            name="usernameInput"
            id="usernameInput"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Find a developer using username" 
            />
            <img 
                src={searchIcon} 
                alt="search-icon" 
                className="searchIcon" 
                onClick={handleSubmit}
            />
        </form>
        {error && <p className="error">{error}</p>}

    </div>
    )
}