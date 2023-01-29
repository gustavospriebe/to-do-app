import "./Footer.css";
import code from "../assets/code.png";
import codeDarkMode from "../assets/code-darkmode.png";
import linkedin from "../assets/linkedin.png";
import linkedinDarkMode from "../assets/linkedin-darkmode.png";
import github from "../assets/github.png";
import githubDarkMode from "../assets/github-darkmode.png";
import { DarkModeContext } from "../context/DarkMode";
import { useContext } from "react";

function Footer() {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <footer>
            <a href="https://github.com/gustavospriebe/to-do-app">
                <img src={darkMode ? codeDarkMode : code} alt="code" />
            </a>
            <a href="https://www.linkedin.com/in/gustavospriebe/">
                <img
                    src={darkMode ? linkedinDarkMode : linkedin}
                    alt="linkedin"
                />
            </a>
            <a href="https://github.com/gustavospriebe">
                <img src={darkMode ? githubDarkMode : github} alt="github" />
            </a>
        </footer>
    );
}

export default Footer;
