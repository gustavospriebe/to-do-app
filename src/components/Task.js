import "./Task.css";
import { DarkModeContext } from "../context/DarkMode";
import { useContext } from "react";

function Task({ task }) {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div
            className={
                darkMode ? "dark task-container task" : "task-container task"
            }
        >
            <button className={darkMode ? "dark" : ""}></button>
            <p className={darkMode ? "dark" : ""}>{task}</p>
        </div>
    );
}

export default Task;
