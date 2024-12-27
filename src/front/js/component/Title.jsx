import PropTypes from "prop-types";
import React from "react";



export const Title = (props) => {

    return (
        <div>
            <h4 className="pt-3" >{props.Title}</h4>
            <p className="border border-success border-2 py-2"> {props.url} </p>
        </div>


    )
}



