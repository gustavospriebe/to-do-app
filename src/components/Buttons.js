import "./Buttons.css";
import { DarkModeContext } from "../context/DarkMode";
import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
function Buttons() {
    const { tasks } = useContext(TasksContext);
    const { darkMode } = useContext(DarkModeContext);

    return (
        <>
            {tasks.length > 0 && (
                <div className="buttons">
                    <p className={darkMode ? "qty-tasks dark" : "qty-tasks"}>
                        2/{tasks.length} tasks done
                    </p>
                </div>
            )}
        </>
    );
}

export default Buttons;
