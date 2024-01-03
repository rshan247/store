import React, { useState } from "react";
import Header from "./Header";
import Category from "./Category";
import ItemContainer from "./ItemContainer";
import Search from "./Search";
import Db from "./Db";



function App(){

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchText, setSearchText] = useState("");

    const handleCategoryChange = category => setSelectedCategory(category);
    const handleSearchText = text => {setSearchText(text);
    // setSearchText((prevText) => {
    //     console.log(prevText);})
    }

    return (
    <div>
        <Header />
        <Category onCategoryChange = {handleCategoryChange} />
        <Search onSearchChange = {handleSearchText} />
        {console.log(searchText)}
        {searchText != ""? <ItemContainer searchItem = {searchText} />
        :
            <ItemContainer selectedCategory = {selectedCategory} />
        }
        
        {/* <Db /> */}
    </div>)
}


export default App;