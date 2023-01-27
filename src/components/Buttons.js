import "./Buttons.css";
import { DarkModeContext } from "../context/DarkMode";
import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
function Buttons() {
    const { tasks, deleteAllTasks } = useContext(TasksContext);
    const { darkMode } = useContext(DarkModeContext);

    return (
        <>
            {tasks.length > 0 && (
                <div className="buttons">
                    <p className={darkMode ? "button dark" : "button"}>
                        2/{tasks.length} tasks done
                    </p>
                    <p onClick={() => deleteAllTasks() } className={darkMode ? "clean button dark" : "clean button"}>Clear all</p>
                </div>
            )}
        </>
    );
}

export default Buttons;
