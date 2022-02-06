import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../components/navigation/navigation";

const postImageArr = [
    "https://images.pexels.com/photos/851213/pexels-photo-851213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/952594/pexels-photo-952594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/834897/pexels-photo-834897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

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

    return (
        <>
            <Navigation title="Medium" />
            <div id="story">
                <h2 id="story__container__image__title">{post.title}</h2>
                <div id="story__container__image">
                    <img
                        className="story__container__image__wide"
                        src={
                            postImageArr[
                                Math.floor(Math.random() * postImageArr.length)
                            ]
                        }
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
