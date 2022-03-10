import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from "../../components/navigation/navigation";
import popupData from "../../challenges.json";
import Popup from "../../components/popup/popup";


// Method to find post using id as a param
function findPost(posts, id) {
    // Find element with matching id
    const post = posts.find((element) => {
        return Number(element.id) === Number(id);
    });

    // Log message and exit if error
    if (!post) {
        console.log("Product Not Found");
        return;
    }

    // Return result
    return post;
}

const Story = (props) => {
    const { id } = useParams();
    const post = findPost(props.posts, id);
    const [show, setShow] = useState(true);

    return (
        <>
            {show && (
                <Popup
                    challenge={popupData.story.challenge}
                    text={popupData.story.text}
                    onClose={() => setShow(!show)}
                    show={show}
                />
            )}
            <Navigation />
            <div id="story">
                <div className="story__button__container__back">
                    <Link to="/feed">
                        <button className="story__button__back">
                            <i className="fas fa-arrow-left"></i>{" "}
                            <span>Back</span>
                        </button>
                    </Link>
                </div>
                <h2 id="story__container__image__title">{post.title}</h2>
                <div id="story__container__image">
                    <img
                        className="story__container__image__wide"
                        src={post.postImage}
                        alt="Writing"
                    />
                </div>
                <div id="story__container__text">
                    <p>{post.text}</p>
                </div>
            </div>
        </>
    );
};

export default Story;
