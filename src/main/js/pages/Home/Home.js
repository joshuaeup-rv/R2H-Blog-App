import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/navigation/navigation";
import NewWriter from "../../components/newWriter/newWriter";
import Post from "../../components/post/post";
import popupData from "../../challenges.json";
import Popup from "../../components/popup/popup";
import { getStorageValue } from "../../utils/useLocalStorage";

const Home = (props) => {
    const [show, setShow] = useState(true);
    const [posts, setPosts] = useState(props.posts);

    useEffect(() => {
        window.scrollTo(0, 0);

        setPosts(getStorageValue("post", props.posts));
    }, []);

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
                    {posts.map((post) => {
                        return (
                            <Link to={`/story/${post.id}`} key={post.id}>
                                <Post
                                    title={post.title}
                                    postImage={post.postImage}
                                    text={post.text}
                                    author={post.author}
                                    group={post.group}
                                    date={post.date}
                                    read_length={post.read_length}
                                />
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
