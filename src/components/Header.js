import { useEffect, useState } from "react";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import "./Header.css";

function Header(props) {
    const [button, setButton] = useState(moon);

    useEffect(() => {
        props.darkMode ? setButton(sun) : setButton(moon);
    }, [props.darkMode]);

    return (
        <header>
            <h2>TODO</h2>
            <img onClick={props.handleChange} src={button} alt="dark mode" />
        </header>
    );
}

export default Header;
