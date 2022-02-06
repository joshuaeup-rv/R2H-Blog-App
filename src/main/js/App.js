import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Account from "./pages/account/account";
import Home from "./pages/home/home";
import NewStory from "./pages/new_story/new_story";
import Story from "./pages/story/story";

const posts = [
    {
        id: 1,
        title: "Web Application Architecture",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n \n when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id: 2,
        title: "(Why) Is jQuery Gone?",
        text: "",
    },
    {
        id: 3,
        title: "Implement email authentication with React + RESTful API",
        text: "",
    },
    {
        id: 4,
        title: "Go (Golang): Clean Architecture & Repositories vs Transactions",
        text: "",
    },
];

function App(props) {
    return (
        <Router>
            <>
                <Routes>
                    <Route exact path="/" element={<Account />}></Route>
                    <Route
                        exact
                        path="/feed"
                        element={<Home posts={posts} />}
                    ></Route>
                    <Route
                        exact
                        path="/story/:id"
                        element={<Story posts={posts} />}
                    ></Route>
                    <Route
                        exact
                        path="/new-story"
                        element={<NewStory />}
                    ></Route>
                </Routes>
            </>
        </Router>
    );
}

export default App;
