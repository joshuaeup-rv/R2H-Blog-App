const Navigation = (props) => {
    return (
        <>
            <div id="navigation">
                <div className="navigation__column">
                    <h1 id="navigation__column__title">
                        <i
                            id="navigation__column__icon"
                            className="fas fa-feather-alt"
                        />
                        {props.title}
                    </h1>
                </div>
                <div className="navigation__column">
                    <button id="navigation__column__button">Post</button>
                    <div id="navigation__column__profile__image__container">
                        <img
                            id="navigation__column__profile__image"
                            alt="profile"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Eo_circle_cyan_letter-j.svg/768px-Eo_circle_cyan_letter-j.svg.png"
                        />
                    </div>
                </div>
            </div>
            <hr id="navigation__gradient" />
        </>
    );
};

export default Navigation;
