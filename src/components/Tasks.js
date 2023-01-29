import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";
import { TasksContext } from "../context/TasksContext";
import Task from "./Task";

function Tasks() {
    const { tasks } = useContext(TasksContext);
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div>
            {tasks.map((task, index) => (
                <Task
                    key={`${task}.${index}`}
                    task={task}
                    index={index}
                    darkMode={darkMode}
                />
            ))}
        </div>
    );
}

export default Tasks;
