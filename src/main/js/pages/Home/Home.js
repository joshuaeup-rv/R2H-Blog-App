import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/navigation/navigation";
import NewWriter from "../../components/newWriter/newWriter";
import Post from "../../components/post/post";
import popupData from "../../challenges.json";
import Popup from "../../components/popup/popup";

const Home = (props) => {
    const [show, setShow] = useState(true);
    return (
        <>
            {show && (
                <Popup
                    challenge={popupData.feed.challenge}
                    text={popupData.feed.text}
                    onClose={() => setShow(!show)}
                    show={show}
                />
            )}
            <Navigation title="LOGO " />
            <div id="home">
                <div>
                    {props.posts.map((post) => {
                        return (
                            <Link to={`/story/${post.id}`} key={post.id}>
                                <Post title={post.title} />
                            </Link>
                        );
                    })}
                </div>

                <NewWriter />
            </div>
        </>
    );
};

export default Home;
