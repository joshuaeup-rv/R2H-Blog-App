const Post = (props) => {
    return (
        <div id="post">
            <div className="post__column">
                <div id="post__column__profile__image__container">
                    <img
                        id="post__column__profile__image"
                        alt="profile"
                        src="https://miro.medium.com/fit/c/20/20/1*ceHirGi683U9Xn6tAlr0jQ.jpeg"
                    />
                    <h2>
                        Joshua Proctor <span>in</span> Javarevisted
                    </h2>
                </div>
                <div id="post__column__text__container">
                    <h2>{props.title}</h2>
                    <p>
                        This is a rundown of amazing Java project ideas that
                        will set off your career in programming. Given, there
                        are dozens of projects that…
                    </p>
                    <p>
                        Jan 15 · 3 min read · <span>Selected for you</span>
                    </p>
                </div>
            </div>
            <div className="post__column">
                <div id="post__column__image__container">
                    <img
                        id="post__column__image"
                        alt="profile"
                        src="https://miro.medium.com/fit/c/200/134/1*kC-xl8XOmmaDm_GUI-eChw.jpeg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Post;
