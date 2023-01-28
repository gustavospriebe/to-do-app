import { useState, useContext } from "react";
import "./Task.css";
import { DarkModeContext } from "../context/DarkMode";
import { TasksContext } from "../context/TasksContext";

function Task() {
    const [value, setValue] = useState("");

    const { darkMode } = useContext(DarkModeContext);
    const { createTasks } = useContext(TasksContext);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.length === 0) {
            return;
        }
        createTasks(value);
        setValue("");
    };

    return (
        <div
            className={
                darkMode
                    ? "dark task-container new-task"
                    : "task-container new-task"
            }
        >
            {/* <button className={darkMode ? "dark" : ""}></button> */}
            <form
                className={darkMode ? "dark form" : "form"}
                onSubmit={handleSubmit}
            >
                <input
                    className={darkMode ? "dark" : ""}
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder="Create a new todo..."
                />
            </form>
        </div>
    );
}

export default Task;
