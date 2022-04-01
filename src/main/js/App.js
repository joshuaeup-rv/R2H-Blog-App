import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Account from "./pages/account/account";
import Feed from "./pages/feed/feed";
import NewStory from "./pages/new_story/new_story";
import Story from "./pages/story/story";
import NotFound from "./pages/notFound/notFound";
import postData from "./post-data";
import popupData from "./challenges.json";
import Problem from "./components/problem/problem";
import Popup from "./components/popup/popup";

function App() {
    const [show, setShow] = useState(false);

    // Challenge category and descriptions
    const problems = [
        { 
            name: "Navigation (Easy)",
            description: "-- Add the challenge description here --"
        },
        { 
            name: "Start Writing (Medium)", 
            description:"-- Add the challenge description here --" 
        },
        { 
            name: "Blog Post (Hard)", 
            description:"-- Add the challenge description here --"
        },
        { 
            name: "Responsive (Bonus)",
            description:"-- Add the challenge description here --" 
        },
    ];

    return (
        <>
            {/* If the show state variable is set to true then display the Popup component */}
            {show && (
                <Popup
                    challenge={popupData.feed.challenge}
                    intro={popupData.feed.intro}
                    text={popupData.feed.text}
                    onClose={() => setShow(false)}
                    show={show}
                >
                    {problems.map((pblm, index) => (
                        <Problem
                            key={index}
                            index={index}
                            problem={pblm.name}
                            description={pblm.description}
                        ></Problem>
                    ))}
                </Popup>
            )}
            <Router>
                <>
                    {/* All of the routes reachable in the application */}
                    <Routes>
                        <Route exact path="/" element={<Account />}></Route>
                        <Route
                            exact
                            path="/feed"
                            element={<Feed posts={postData} />}
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

            <i
                id="circle-info"
                className="fa-solid fa-circle-question"
                onClick={() => setShow(true)}
                style={{ display: `${show ? "none" : "block"}` }}
            ></i>
        </>
    );
}

export default App;
