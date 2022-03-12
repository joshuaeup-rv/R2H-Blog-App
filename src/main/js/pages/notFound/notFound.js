import React from "react";
import Navigation from "../../components/navigation/navigation";
import gif from "../../assets/404.gif"
import { useEffect } from "react";


const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

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
