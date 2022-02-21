import React, { useState } from "react";
import Signin from "../../components/signin/signin";
import Signup from "../../components/signup/signup";
import Popup from "../../components/popup/popup";
import popupData from "../../challenges.json";

const Account = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [show, setShow] = useState(true);

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
            {show && (
                <Popup
                    challenge={popupData.login.challenge}
                    text={popupData.login.text}
                    onClose={() => setShow(!show)}
                    show={show}
                />
            )}
            <div id="account">
                <Form />
            </div>
        </>
    );
};

export default Account;
