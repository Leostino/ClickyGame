import React from "react";

function ImageCard(props) {
    return (
        <div className="card">
            <div className="card-body">
                <img className="card-img" src={props.image} alt={props.name} />
            </div>
            <div className="card-footer">
                {props.name}
            </div>
        </div>
    )
}


export default ImageCard;