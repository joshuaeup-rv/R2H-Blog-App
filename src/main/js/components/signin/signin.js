import { Link } from "react-router-dom";

const Signin = (props) => {
    return (
        <div>
            <h1>Welcome back.</h1>
            <form>
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
                        <Link exact path to="/feed">
                            Sign in{" "}
                            <span>
                                <i className="fas fa-arrow-right"></i>
                            </span>
                        </Link>
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
