import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";
import { TasksContext } from "../context/TasksContext";
import "./Buttons.css";
import classNames from "classnames";

function Buttons() {
    const { tasks, deleteAllTasks, getFilter, filter } =
        useContext(TasksContext);
    const { darkMode } = useContext(DarkModeContext);

    return (
        <>
            {tasks.length > 0 && (
                <div className={darkMode ? "buttons dark" : "buttons"}>
                    <p className={darkMode ? "button dark" : "button"}>
                        {tasks.filter((task) => task.completed === true).length}
                        /{tasks.length} tasks done
                    </p>
                    <div
                        className={
                            darkMode ? "filter-options dark" : "filter-options"
                        }
                    >
                        <p
                            onClick={(e) => getFilter(e.target.innerHTML)}
                            className={`button filter ${
                                darkMode ? "dark" : ""
                            } ${filter === "All" ? "active-filter" : ""}`}
                        >
                            All
                        </p>
                        <p
                            onClick={(e) => getFilter(e.target.innerHTML)}
                            className={`button filter ${
                                darkMode ? "dark" : ""
                            } ${filter === "Active" ? "active-filter" : ""}`}
                        >
                            Active
                        </p>
                        <p
                            onClick={(e) => getFilter(e.target.innerHTML)}
                            className={`button filter ${
                                darkMode ? "dark" : ""
                            } ${filter === "Completed" ? "active-filter" : ""}`}
                        >
                            Completed
                        </p>
                    </div>
                    <p
                        onClick={() => deleteAllTasks()}
                        className={
                            darkMode ? "clean button dark" : "clean button"
                        }
                    >
                        Clear Completed
                    </p>
                </div>
            )}
        </>
    );
}

export default Buttons;
