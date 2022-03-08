// import React, { useState } from "react";
import Navigation from "../../components/navigation/navigation";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
// import Popup from "../../components/popup/popup";
// import popupData from "../../challenges.json";

const NewStory = () => {
    // const [show, setShow] = useState(true);
    const submitPost = () => {
        console.log("Submitted");
    };

    return (
        <>
            {/* {show && (
                <Popup
                    challenge={popupData.newStory.challenge}
                    text={popupData.newStory.text}
                    onClose={() => setShow(!show)}
                    show={show}
                />
            )} */}
            <Navigation title="Draft" submit={submitPost} />
            <div className="story__button__container__back">
                <Link to="/feed">
                    <button className="story__button__back">
                        <i className="fas fa-arrow-left"></i> <span>Back</span>
                    </button>
                </Link>
            </div>
            <div id="new__story">
                <input id="new__story__input__title" placeholder="Title..." />
                <textarea
                    className="new__story__input__text"
                    placeholder="Add your story here..."
                />
            </div>
        </>
    );
};

export default NewStory;
