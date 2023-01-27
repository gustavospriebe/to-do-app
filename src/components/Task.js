import "./Task.css";
import { DarkModeContext } from "../context/DarkMode";
import { TasksContext } from "../context/TasksContext";
import { useContext } from "react";
import cross from "../assets/icon-cross.svg";


function Task({ task, index }) {
    const { darkMode } = useContext(DarkModeContext);
    const { deleteTasks } = useContext(TasksContext);

    console.log(task)

    return (
        <div
            className={
                darkMode ? "dark task-container task" : "task-container task"
            }
        >
            <button className={darkMode ? "dark" : ""}></button>
            <p className={darkMode ? "dark task-text" : "task-text"}>{task.title}</p>
            <img onClick ={() => deleteTasks(index)} style={{width:'14px'}} src={cross} alt="x" />
        </div>
    );
}

export default Task;
