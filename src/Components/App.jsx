import React, { useState } from "react";
import Header from "./Header";
import Category from "./Category";
import ItemContainer from "./ItemContainer";
import Search from "./Search";
import Db from "./Db";
import Button from "./Button";



function App(){

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchText, setSearchText] = useState("");
    const [categoryDisabled, setCategoryDisabled] = useState(false);
    const [categoryAll, setCategoryALL] = useState("");

    const handleCategoryChange = category => setSelectedCategory(category);
    const handleSearchText = text => setSearchText(text);    
    const handleCategoryDisable = value => {
        setCategoryDisabled(value);
        setSelectedCategory("all")
    }
    const handleCategoryAll = value => setCategoryALL(value);

    return (
    <div>
        <Header />
        <Category 
            isCategoryAll = {categoryAll}
            onCategoryChange = {handleCategoryChange} 
            isCategoryDisabled = {categoryDisabled}
        />
        <Search 
            onSearchChange = {handleSearchText} 
            toDisableCategory = {handleCategoryDisable}
        />

        {searchText != ""? 
            <div>
                <ItemContainer searchItem = {searchText}/>
                <Button 
                    toRestoreall = {handleSearchText}
                    toRestoreCategory = {handleCategoryDisable}
                    category = {handleCategoryAll}
                />
            </div>
        :
            <ItemContainer selectedCategory = {selectedCategory} />
        }
        {/* <Db /> */}
    </div>)
}


export default App;