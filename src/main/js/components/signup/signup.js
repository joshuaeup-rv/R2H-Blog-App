import { useLocalStorage } from "../../utils/useLocalStorage";

const Signup = (props) => {
    const [name, setName] = useLocalStorage("name", "");
    const [email, setEmail] = useLocalStorage("email", "");
    const [password, setPassword] = useLocalStorage("password", "");

    return (
        <div>
            <h1>Create Your Account</h1>
            <form onSubmit={props.authenticated}>
                <div className="signin__container">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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
                        value="Register"
                    />
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
