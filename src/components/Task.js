import "./Task.css";

function Task({ darkMode, task }) {
    console.log(task);

    return (
        <div className={darkMode ? "dark task-container" : "task-container"}>
            <button className={darkMode ? "dark" : ""}></button>
            <p className={darkMode ? "dark" : ""}>{task}</p>
        </div>
    );
}

export default Task;
