import React, {useState} from "react";
import Toolbar from "./Toolbar";

function  LandingPage(props) {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickout}
            />
            <div style={{ padding: 16 }}>유갱과 함꼐하는 리액트 공부!</div>
        </div>
    );

}

export default LandingPage;