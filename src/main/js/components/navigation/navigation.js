import { Link } from "react-router-dom";

const Navigation = (props) => {
    return (
        <>
            <div id="navigation">
                <div className="navigation__column">
                    <Link to="/">
                        <h1 id="navigation__column__title">
                            <i
                                id="navigation__column__icon"
                                className="fas fa-feather-alt"
                            />
                            <span>{props.title}</span>
                        </h1>
                    </Link>
                </div>
                <div className="navigation__column">
                    {props.title === "Draft" ? (
                        <button
                            id="navigation__column__button"
                            style={{
                                backgroundColor: "#507fff",
                                color: "white",
                                border: "none",
                            }}
                            onClick={props.submit}
                        >
                            Submit
                        </button>
                    ) : (
                        <Link to="/new-story">
                            <button id="navigation__column__button">
                                Post
                            </button>
                        </Link>
                    )}
                    <Link to="/account">
                        <div id="navigation__column__profile__container">
                            <span id="navigation__column__profile__letter">
                                J
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
            <hr id="navigation__gradient" />
        </>
    );
};

export default Navigation;
