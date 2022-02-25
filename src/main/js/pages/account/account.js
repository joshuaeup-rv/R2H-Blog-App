import React, { useState } from "react";
import Signin from "../../components/signin/signin";
import Signup from "../../components/signup/signup";

const Account = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const updateToggle = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    const Form = (props) => {
        if (isLoggedIn) {
            return <Signin update={updateToggle} />;
        }
        return <Signup update={updateToggle} />;
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
