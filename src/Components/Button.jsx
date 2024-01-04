import React from "react";

function Button(props){

    function handleClick(){
        props.toRestoreall("");
        props.toRestoreCategory(false)
        props.category("all")
    }

    return(
        <div className="item-container-extra">
            <button className="mybutton" onClick={handleClick}>
                Back to all
            </button>
        </div>
    )
};

export default Button;