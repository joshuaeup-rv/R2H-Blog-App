import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/home";
import NewStory from "./pages/new_story/new_story";
import Account from "./pages/account/account";

function App() {
    return (
        <Router>
            <>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/account" element={<Account />}></Route>
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
