import React, { useState } from "react";
import items from "../items";

function getItems(item){

    const setGray =item.availability;

    return(
            <div className="product" key={item.id}>
                <img className ={`product-image ${!setGray ? "gray-image" : null }`}
                src={item.image} alt={item.name} />
                <h2 className="product-name">{item.name}</h2>
                <span className="price">{item.price} Rs</span>
                {/* <p className="product-description">{item.description}</p> */}
            </div>
    );
}

function ItemContainer(props){
    
    if(props.searchItem){
        // const searchedItem = items.find((item) => item.name == props.searchItem)
        const searchedItem =items.filter((item) => item.name.toLowerCase().includes(props.searchItem.toLowerCase()));
   
        return searchedItem.length != 0 ? 
            <div className="item-container">
                {searchedItem.map(item => getItems(item))}
            </div>
        :
        <div className="item-container-extra">
            No Product named "{props.searchItem}".
        </div> ;
    }
    else{

        const filteredItems = props.selectedCategory != "all" ? 
        (items.filter((item) => item.category == props.selectedCategory)) : items;

        return(
            <div className="item-container">
                {filteredItems.map(item => getItems(item))}
            </div>
        );
    }
}

export default ItemContainer;