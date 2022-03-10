import React from "react";
import Navigation from "../../components/navigation/navigation";
import gif from "../../assets/404.gif"


const NotFound = () => {
    return (
        <>
            <Navigation title="LOGO " />
            <div id="not-found">
                <div>
                <h1>Page Not Found</h1>
                <img id="not-found__image" src={gif} alt="not-found" />
                </div>
            </div>
        </>
    );
};

export default NotFound;
