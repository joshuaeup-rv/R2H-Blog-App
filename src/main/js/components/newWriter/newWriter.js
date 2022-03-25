const NewWriter = () => {
    // A function triggered by the click of Start writing button
    const startWriting = (e) => {
        // Prevent the page from loading once this function is triggered
        e.preventDefault();
        // Navigate to the "/new-story" path once this function is triggered
        window.location.href = "/new-story";
    };

    return (
        <>
            <div id="new__writer__container">
                <div>
                    <div>
                        <h4 id="new__writer__container__title">
                            Helpful Tips for Debugging
                        </h4>
                        <h5>Do Your Research</h5>
                        <p>
                            Once you have your idea, make sure to research the
                            front page of Google and your main competitors at
                            this stage to see how you can improve on what’s out
                            there. If you can’t write a high quality post that’s
                            better than theirs, don’t bother! You don’t need to
                            be an expert on the topic, but you do need to do
                            your research to make sure you’re adding value.
                        </p>
                        <h5>Take Notes and Start an Outline</h5>
                        <p>
                            While you do your research keep a notebook handy
                            where you can take down the important points and
                            outline your topic. Okay, if not a notebook at least
                            keeps a Google doc tab open. I like using Google
                            docs because, unlike using a notebook, I don’t have
                            to bother about losing it.
                        </p>
                        <h5>Hook Your Readers With a Great Opening</h5>
                        <p>
                            If you can hook your readers with a good opening
                            consider half your work to be done. Because if your
                            introduction is boring, people wouldn’t bother to
                            read the rest. Many writers find it easier to write
                            the body of the blog post first, and save writing
                            the intro for last. A good way to write a great
                            introduction is to pose a question addressing the
                            reader’s problem. Then you can tell them how reading
                            your post can help them tackle it. This is a great
                            way to grab your readers’ attention, and they’ll
                            definitely want to read it till the end in the hope
                            of finding the solution.
                        </p>
                        <h5>Write Like You Talk</h5>
                        <p>
                            Don’t overlook the style and tone of your writing.
                            Both these elements can make a big difference.
                            Writing like you’re talking to your reader can make
                            them feel like they’re having a conversation with
                            someone, rather than actually reading a post. Your
                            readers will feel like you’re talking to them
                            one-one-one to help them figure out a problem that
                            you can relate to. This is great for building a
                            loyal readership.
                        </p>
                        <button onClick={startWriting}>Start writing</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewWriter;
