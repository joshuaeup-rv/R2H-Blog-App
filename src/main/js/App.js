import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/login/login";
import NewStory from "./pages/new_story/new_story";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/account" element={<Login />}></Route>
          <Route exact path="/new-story" element={<NewStory />}></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
