import React from "react";
import items from "../items";



function getItems(item){
    return(
            <div className="product" key={item.id}>
                <img className="product-image" src={item.image} />
                <h2 className="product-name">{item.name}</h2>
                <span className="price">{item.price} Rs</span>
                <p className="product-description">{item.description}</p>
            </div>
    );
}

function ItemContainer(props){
    let filteredItems
    if(props.selectedCategory == "all") filteredItems = items;

    else filteredItems = props.selectedCategory ? (items.filter((item) => item.category == props.selectedCategory)) : items;

    // console.log(props.selectedCategory);
    // console.log(filteredItems);
    return(
        <div className="item-container">
            {filteredItems.map(item => getItems(item))}
        </div>
    );
}

export default ItemContainer;