import React, { useState } from "react";
import SavedSearchIcon from '@mui/icons-material/SavedSearch';


function Search(props){
    const [searchText, setSearchText] = useState("");

    function handleChange(event){
        setSearchText(event.target.value);
    }

    function handleClick(){
        props.onSearchChange(searchText);
        props.toDisableCategory(true);
        setSearchText("");
        console.log("fn called");
    }

    return(
        <div className="search-container">
            <input type="text" placeholder="search" id="search-bar" 
            value={searchText}
            onChange={handleChange} />
            <SavedSearchIcon className="search-icon" 
            onClick = {handleClick}/>
        </div>
    )
}

export default Search;