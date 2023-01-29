import "./Task.css";
import { TasksContext } from "../context/TasksContext";
import { useContext } from "react";
import cross from "../assets/icon-cross.svg";

function Task({ task, index, darkMode }) {
    const { deleteTasks, completeTasks, filter } = useContext(TasksContext);

    const filterTasks = () => {
        if (task.completed && filter === "Completed") {
            return { display: "flex" };
        }
        if (!task.completed && filter === "Active") {
            return { display: "flex" };
        }
        if (filter === "All") {
            return { display: "flex" };
        }
        return { display: "none" };
    };

    return (
        <div
            style={filterTasks()}
            className={
                darkMode ? "dark task-container task" : "task-container task"
            }
        >
            {darkMode ? (
                <button
                    onClick={() => completeTasks(index)}
                    className={task.completed ? "completed dark" : "dark"}
                ></button>
            ) : (
                <button
                    onClick={() => completeTasks(index)}
                    className={task.completed ? "completed" : ""}
                ></button>
            )}
            {task.completed ? (
                <p
                    className={
                        darkMode
                            ? "dark task-text completed"
                            : "task-text completed"
                    }
                >
                    {task.title}
                </p>
            ) : (
                <p className={darkMode ? "dark task-text" : "task-text"}>
                    {task.title}
                </p>
            )}
            <img
                onClick={() => deleteTasks(index)}
                style={{ width: "14px" }}
                src={cross}
                alt="x"
            />
        </div>
    );
}

export default Task;
