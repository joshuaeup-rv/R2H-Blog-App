import React from "react";
import Navigation from "../../components/navigation/navigation";
import NewWriter from "../../components/newWriter/newWriter";
import Post from "../../components/post/post";

const titles = [
    "Web Application Architecture",
    "(Why) Is jQuery Gone?",
    "Implement email authentication with React + RESTful API",
    "Go (Golang): Clean Architecture & Repositories vs Transactions",
    "Web Application Architecture",
    "(Why) Is jQuery Gone?",
    "Implement email authentication with React + RESTful API",
    "Go (Golang): Clean Architecture & Repositories vs Transactions",
    "Web Application Architecture",
    "(Why) Is jQuery Gone?",
    "Implement email authentication with React + RESTful API",
    "Go (Golang): Clean Architecture & Repositories vs Transactions",
    "Web Application Architecture",
    "(Why) Is jQuery Gone?",
    "Implement email authentication with React + RESTful API",
    "Go (Golang): Clean Architecture & Repositories vs Transactions",
    "Web Application Architecture",
    "(Why) Is jQuery Gone?",
    "Implement email authentication with React + RESTful API",
    "Go (Golang): Clean Architecture & Repositories vs Transactions",
];

const Home = () => {
    return (
        <>
            <Navigation title="Medium " />
            <div id="home">
                <div>
                    {titles.map((title, index) => {
                        return <Post key={index} title={title} />;
                    })}
                </div>

                <NewWriter />
            </div>
        </>
    );
};

export default Home;
