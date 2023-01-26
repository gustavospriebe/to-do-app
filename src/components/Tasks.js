import Task from "./Task";
import "./Tasks.css";
import { DarkModeContext } from "../context/DarkMode";
import { useContext } from "react";

function Tasks({ tasks }) {

    console.log(tasks)

    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className="tasks">
            {tasks.map((task, index) => (
                <Task
                    key={`${task}.${index}`}
                    task={task}
                    darkMode={darkMode}
                />
            ))}
        </div>
    );
}

export default Tasks;
