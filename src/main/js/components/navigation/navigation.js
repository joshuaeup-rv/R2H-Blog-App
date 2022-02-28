import { Link } from "react-router-dom";
import logo from "../../assets/DebugMe.png";

const Navigation = (props) => {
    return (
        <>
            <div id="navigation">
                <div className="navigation__column">
                    <div id="navigation__column__image__container">
                        <Link to="/feed">
                            <img
                                id="navigation__column__image"
                                src={logo}
                                alt="logo"
                            />
                        </Link>
                    </div>
                </div>
                <div className="navigation__column">
                    {props.title === "Draft" ? (
                        <button
                            id="navigation__column__button__submit"
                            className="navigation__column__button"
                            onClick={props.submit}
                        >
                            Submit
                        </button>
                    ) : (
                        <Link to="/new-story">
                            <button className="navigation__column__button">
                                Post
                            </button>
                        </Link>
                    )}
                    <Link to="/">
                        <div id="navigation__column__profile__container">
                            <span id="navigation__column__profile__letter">
                                J
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navigation;
