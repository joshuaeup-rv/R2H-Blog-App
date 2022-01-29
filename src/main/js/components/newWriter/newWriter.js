import { Link } from "react-router-dom";

const NewWriter = () => {
    return (
        <>
            <div id="new__writer__container">
                <div>
                    <div>
                        <h4 id="new__writer__container__title">
                            Helpful Tips for Writing
                        </h4>
                        <h5>Who can see the post?</h5>
                        <p>
                            Once you’ve published your story, anyone who opens
                            up the link can read it. Readers who follow you on
                            Medium will still see your story in their
                            “Following” section on their homepage. It can also
                            show up in their Daily Digest email. If the story is
                            curated, it will be distributed through
                            recommendations, generally based on the reader’s
                            interests. These recommendations show up on the
                            homepage and the Daily Digest, and are unique to
                            each reader.
                        </p>
                        <h5>Who can see the post?</h5>
                        <p>
                            Once you’ve published your story, anyone who opens
                            up the link can read it. Readers who follow you on
                            Medium will still see your story in their
                            “Following” section on their homepage. It can also
                            show up in their Daily Digest email. If the story is
                            curated, it will be distributed through
                            recommendations, generally based on the reader’s
                            interests. These recommendations show up on the
                            homepage and the Daily Digest, and are unique to
                            each reader.
                        </p>
                        <h5>Who can see the post?</h5>
                        <p>
                            Once you’ve published your story, anyone who opens
                            up the link can read it. Readers who follow you on
                            Medium will still see your story in their
                            “Following” section on their homepage. It can also
                            show up in their Daily Digest email. If the story is
                            curated, it will be distributed through
                            recommendations, generally based on the reader’s
                            interests. These recommendations show up on the
                            homepage and the Daily Digest, and are unique to
                            each reader.
                        </p>
                        <Link to="/new-story">
                            <button>Start writing</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewWriter;
