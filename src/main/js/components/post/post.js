const Post = (props) => {
    return (
        <div id="post">
            <div className="post__column">
                <div id="post__column__profile__image__container">
                    <img
                        id="post__column__profile__image"
                        alt="profile"
                        src={props.profileImage}
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
                        src={props.postImage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Post;
