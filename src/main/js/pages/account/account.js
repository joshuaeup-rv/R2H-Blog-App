import React, { useState } from "react";
import Signin from "../../components/signin/signin";
import Signup from "../../components/signup/signup";

const Account = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const updateToggle = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    const Greeting = (props) => {
        if (isLoggedIn) {
            return <Signin update={updateToggle} />;
        }
        return <Signup update={updateToggle} />;
    };
    return (
        <>
            <div id="account">
                <Greeting />
            </div>
        </>
    );
};

export default Account;
