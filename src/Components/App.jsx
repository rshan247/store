import React, { useState } from "react";
import Header from "./Header";
import Category from "./Category";
import ItemContainer from "./ItemContainer";

function App(){

    const [selectedCategory, setSelectedCategory] = useState();

    const handleCategoryChange = category => setSelectedCategory(category);

    return (
    <div>
        <Header />
        <Category onCategoryChange = {handleCategoryChange} />
        <ItemContainer selectedCategory = {selectedCategory} />
    </div>)
}


export default App;