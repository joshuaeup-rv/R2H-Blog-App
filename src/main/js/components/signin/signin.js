import { getStorageValue } from "../../utils/useLocalStorage";
import { useState } from "react";

const Signin = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [wrongCredentials, setWrongCredentials] = useState(false);

    const authenticateUser = (e) => {
        e.preventDefault();
        const savedEmail = getStorageValue("email", "");
        const savedPassword = getStorageValue("password", "");

        if (email === savedEmail && password === savedPassword) {
            window.location.href = "/feed";
        } else {
            setWrongCredentials(true);
            console.log("The email or password entered is incorrect");
        }
    };
    return (
        <div>
            <h1>Welcome back.</h1>

            <form onSubmit={authenticateUser}>
                {wrongCredentials && (
                    <div id="wrong__credentials__prompt">
                        <p>Incorrect email or password. </p>
                        <span>
                            <i
                                className="fas fa-times"
                                onClick={() => setWrongCredentials(false)}
                            ></i>
                        </span>
                    </div>
                )}
                <div className="signin__container">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="signin__container">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="signin__container">
                    <input
                        className="form__submit__btn"
                        type="submit"
                        value="Sign in"
                    />
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
