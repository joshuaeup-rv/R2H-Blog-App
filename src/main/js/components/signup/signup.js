const Signup = (props) => {
    return (
        <div>
            <h1>Create Your Account</h1>
            <form>
                <div className="signin__container">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" name="name" />
                </div>
                <div className="signin__container">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" />
                </div>
                <div className="signin__container">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" />
                </div>
                <div className="signin__container">
                    <button>Register</button>
                </div>
                <div id="signup__container">
                    <p>
                        Already have an account?{" "}
                        <a id="signup__container__link" onClick={props.update}>
                            Sign in
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Signup;
