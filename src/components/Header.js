import { useEffect, useState, useContext } from "react";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import "./Header.css";
import { DarkModeContext } from "../context/DarkMode";

function Header() {
    const [button, setButton] = useState(moon);

    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    useEffect(() => {
        darkMode ? setButton(sun) : setButton(moon);
    }, [darkMode]);

    const handleDarkMode = () => {
        toggleDarkMode();
    };

    return (
        <header>
            <h2>TODO</h2>
            <img onClick={handleDarkMode} src={button} alt="dark mode" />
        </header>
    );
}

export default Header;
