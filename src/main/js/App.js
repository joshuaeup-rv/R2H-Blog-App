import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Account from "./pages/account/account";
import Home from "./pages/home/home";
import NewStory from "./pages/new_story/new_story";
import Story from "./pages/story/story";
import NotFound from "./pages/notFound/notFound";
import postData from "./post-data";

function App() {
    return (
        <Router>
            <>
                <Routes>
                    <Route exact path="/" element={<Account />}></Route>
                    <Route
                        exact
                        path="/feed"
                        element={<Home posts={postData} />}
                    ></Route>
                    <Route
                        exact
                        path="/story/:id"
                        element={<Story posts={postData} />}
                    ></Route>
                    <Route
                        exact
                        path="/new-story"
                        element={<NewStory posts={postData} />}
                    ></Route>
                    <Route path="/*" element={<NotFound />}></Route>
                </Routes>
            </>
        </Router>
    );
}

export default App;
