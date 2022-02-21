import React from "react";

const Popup = (props) => {
    return (
        <div id="popup__overlay">
            <div id="popup__container">
                <div>
                    <span onClick={props.onClose}>
                        <i class="fas fa-times"></i>
                    </span>
                </div>
                <h1>Challenge: {props.challenge}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default Popup;
