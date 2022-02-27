import { Link } from "react-router-dom";

const Navigation = (props) => {
    return (
        <>
            <div id="navigation">
                <div className="navigation__column">
                    <h1 id="navigation__column__title">
                        <Link to="/feed">
                            <span>{props.title}</span>
                        </Link>
                    </h1>
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
