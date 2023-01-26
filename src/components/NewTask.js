import { useState } from "react";
import "./Task.css";

function Task({ darkMode, setTasks }) {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks((prevState) => [...prevState, value]);
        setValue("");
    };

    return (
        <div className={darkMode ? "dark task-container" : "task-container"}>
            <button className={darkMode ? "dark" : ""}></button>
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
