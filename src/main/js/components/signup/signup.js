const Signup = (props) => {
    return (
        <div>
            <h1>Create Your Account</h1>
            <form>
                <div className="signin__container">
                    <label>Name</label>
                    <input type="text" />
                </div>
                <div className="signin__container">
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div className="signin__container">
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div className="signin__container">
                    <button>
                        Register{" "}
                        <span>
                            <i className="fas fa-arrow-right"></i>
                        </span>
                    </button>
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
