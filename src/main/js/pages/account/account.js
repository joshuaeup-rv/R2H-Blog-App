import React, { useState, useEffect } from "react";
import Signin from "../../components/signin/signin";
import Signup from "../../components/signup/signup";

const Account = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const updateToggle = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    const Form = () => {
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
