import React, { useState } from "react";
import Signin from "../../components/signin/signin";
import Signup from "../../components/signup/signup";

const Account = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const updateToggle = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    const authenticated = (e) => {
        e.preventDefault();

        console.log("Authenticating User...");

        setTimeout(() => {
            console.log("Authenticated");
            window.location.href = "/feed";
        }, 2000);
    };

    const Form = () => {
        if (isLoggedIn) {
            return (
                <Signin authenticated={authenticated} update={updateToggle} />
            );
        }
        return <Signup authenticated={authenticated} update={updateToggle} />;
    };
    return (
        <>
            <div id="account">
                <Form />
            </div>
        </>
    );
};

export default Account;
