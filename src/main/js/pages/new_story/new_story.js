import React, { useState, useEffect } from "react";
import Navigation from "../../components/navigation/navigation";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import Popup from "../../components/popup/popup";
import popupData from "../../challenges.json";
import { getStorageValue, useLocalStorage } from "../../utils/useLocalStorage";
import mock_post_data, { calculateReadLength } from "../../post-data";
import moment from "moment";

const NewStory = () => {
    const [title, setTitle] = useLocalStorage("title", "");
    const [text, setText] = useLocalStorage("text", "");
    const [posts, setPosts] = useLocalStorage("post", "");
    const [show, setShow] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const submitPost = () => {
        const postData = {
            title: getStorageValue("title", ""),
            postImage:
                "https://images.pexels.com/photos/69797/morocco-africa-desert-marroc-69797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            text: getStorageValue("text", ""),
            author: getStorageValue("name", ""),
            group: "Javaland",
            date: moment().format("MMM Do"),
            read_length: calculateReadLength(getStorageValue("text", "")),
        };

        if (posts) {
            postData.id = posts.length + 1;
            setPosts([...posts, postData]);
            console.log("Not Empty", posts);
        } else {
            postData.id = mock_post_data.length + 1;
            setPosts([...mock_post_data, ...posts, postData]);
            console.log("Empty", posts);
        }

        localStorage.setItem("post", posts);

        window.location.href = "/feed";
        console.log("Submitted");
        clearInputs();
    };

    const clearInputs = () => {
        setTitle("");
        setText("");
    };

    return (
        <>
            {show && (
                <Popup
                    challenge={popupData.newStory.challenge}
                    text={popupData.newStory.text}
                    onClose={() => setShow(!show)}
                    show={show}
                />
            )}
            <Navigation title="Draft" submit={submitPost} />
            <div className="story__button__container__back">
                <Link to="/feed">
                    <button className="story__button__back">
                        <i className="fas fa-arrow-left"></i> <span>Back</span>
                    </button>
                </Link>
            </div>
            <div id="new__story">
                <input
                    id="new__story__input__title"
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title..."
                />
                <textarea
                    className="new__story__input__text"
                    type="text"
                    name="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add your story here..."
                />
            </div>
        </>
    );
};

export default NewStory;
