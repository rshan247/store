import React, { useState } from "react";
import Header from "./Header";
import Category from "./Category";
import ItemContainer from "./ItemContainer";
import Search from "./Search";
import Db from "./Db";
import Button from "./Button";
import Footer from "./Footer";



function App(){

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchText, setSearchText] = useState("");
    const [categoryDisabled, setCategoryDisabled] = useState(false);

    const handleCategoryChange = category => {
        setSelectedCategory(category);
    }
    const handleSearchText = text => setSearchText(text);    
    const handleCategoryDisable = value => {
        setCategoryDisabled(value);
        setSelectedCategory("all")
    }


    return (
    <div>
        <Header />
        <Category 
            isCategoryAll = {selectedCategory}
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
                    category = {handleCategoryChange}
                />
            </div>
        :
            <ItemContainer selectedCategory = {selectedCategory} />
        }
        {/* <Db /> */}
        {selectedCategory == "all" && searchText == "" ? <Footer /> : null}
    </div>)
}


export default App;