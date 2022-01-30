import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Account from "./pages/account/account";
import Home from "./pages/home/home";
import NewStory from "./pages/new_story/new_story";

function App() {
    return (
        <Router>
            <>
                <Routes>
                    <Route exact path="/" element={<Account />}></Route>
                    <Route exact path="/feed" element={<Home />}></Route>
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
