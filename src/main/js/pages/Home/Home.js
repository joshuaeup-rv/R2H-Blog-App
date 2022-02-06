import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/navigation/navigation";
import NewWriter from "../../components/newWriter/newWriter";
import Post from "../../components/post/post";

const Home = (props) => {
    return (
        <>
            <Navigation title="Medium " />
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
