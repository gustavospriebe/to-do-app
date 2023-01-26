import "./Buttons.css";
import { DarkModeContext } from "../context/DarkMode";
import { useContext } from "react";

function Buttons({ tasks }) {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className="buttons">
            <p className={darkMode ? "qty-tasks dark" : "qty-tasks"}>
                2/{tasks.length} tasks done
            </p>
        </div>
    );
}

export default Buttons;
