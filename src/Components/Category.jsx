import React, { useState } from "react";
import Form from 'react-bootstrap/Form';


function Category(props){

    const [category, setCategory] = useState("all");

     function handleCategoryChange(event){
        let value = event.target.value;
        setCategory(value);
        props.onCategoryChange(value);
    }
    

    return(
        <div className={`category-container  ${props.isCategoryDisabled && "disabled"}`}>
            <label>Category :</label>
            <Form.Select  className="category-dropdown" size="sm" 
            value={props.isCategoryAll == "all"? props.isCategoryAll : category} 
            onChange={handleCategoryChange}>
                <option value="all">All</option>
                <option value="beauty">Beauty Products</option>
                <option value="health care">Health care</option>
                <option value="personal care">Personal care</option>
                <option value="home care">Home care</option>
            </Form.Select>
            
        </div>
    );
}

export default Category;