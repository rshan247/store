import React, { useState } from "react";
import Form from 'react-bootstrap/Form';


function Category(props){

    const [category, setCategory] = useState("all");

     function handleCategoryChange(event){
        let value = event.target.value;
        // setCategory(value);
        props.onCategoryChange(value);
        // console.log("category passed" + value);
    }
    

    return(
        <div className="category-container">
            <label>Category :</label>
            <Form.Select  className="category-dropdown" size="sm" onChange={handleCategoryChange}>
                <option value="all">All</option>
                <option value="beauty">Beauty Products</option>
                <option value="medicine">Medicines</option>
            </Form.Select>
        </div>
    );
}

export default Category;