import { Link } from "react-router-dom";

const Signin = (props) => {
    return (
        <div>
            <h1>Welcome back.</h1>
            <form>
                <div className="signin__container">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" />
                </div>
                <div className="signin__container">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" />
                </div>
                <div className="signin__container">
                    <button>
                        <Link to="/feed">Sign in</Link>
                    </button>
                </div>
                <div id="signup__container">
                    <p>
                        Don't have an account yet?{" "}
                        <a id="signup__container__link" onClick={props.update}>
                            Create one
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Signin;
