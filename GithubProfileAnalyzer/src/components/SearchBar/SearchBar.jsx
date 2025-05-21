import React, { useState, useRef, useEffect } from "react";
import "./SearchBar.css";
import searchIcon from "../../assets/icons/searchIcon.png";
import clearIcon from "../../assets/icons/clearButton.png";

// export default function SearchBar() {

//     // Reset styles when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
//                 setIsFocused(false); // Reset to initial state
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     return (
//         <div className="searchBar" ref={searchBarRef}>
//             {!isFocused && <img src={searchIcon} className="searchIcon" alt="Search" />}
//             <input
//                 type="text"
//                 name="usernameInput"
//                 id="usernameInput"
//                 placeholder="Find a developer using username"
//                 value={inputValue} // Controlled input
//                 onChange={(e) => setInputValue(e.target.value)} // Update state on change
//                 onFocus={() => setIsFocused(true)}
//             />
//             {isFocused && (
//                 <img
//                     src={clearIcon}
//                     className="clearButton"
//                     alt="Clear search"
//                     onClick={handleClear} // Use the clear handler
//                 />
//             )}
//         </div>
//     );
// }

export default function SearchBar() {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const searchBarRef = useRef(null)

    useEffect(()=>{
        const handleClickOutside = (e) => {
            if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
                setIsFocused(false); 
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);

    }, []);

    const handleClear = () => {
        setIsFocused(false);
        setInputValue("");
    }

    return (
    <div className="searchBar" ref={searchBarRef}>
        <img src={searchIcon} alt="search-icon" className="searchIcon" />
        <input 
            type="text"
            name="usernameInput"
            id="usernameInput"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Find a developer using username" 
            onFocus={() => {setIsFocused(true)}}
        />
        {isFocused && (
                <img
                    src={clearIcon}
                    className="clearButton"
                    alt="Clear search"
                    onClick={handleClear} // Use the clear handler
                />
            )
        }
    </div>
    )
}