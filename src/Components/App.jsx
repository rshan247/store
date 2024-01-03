import React, { useState } from "react";
import Header from "./Header";
import Category from "./Category";
import ItemContainer from "./ItemContainer";
import Db from "./Db";



function App(){

    const [selectedCategory, setSelectedCategory] = useState();
    

    const handleCategoryChange = category => setSelectedCategory(category);


    return (
    <div>
        <Header />
        <Category onCategoryChange = {handleCategoryChange} />
        <ItemContainer selectedCategory = {selectedCategory} />
        {/* <Db /> */}
    </div>)
}


export default App;