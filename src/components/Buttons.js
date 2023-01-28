import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";
import { TasksContext } from "../context/TasksContext";
import "./Buttons.css";

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
                            className={
                                (darkMode
                                    ? "button filter dark"
                                    : "button filter") &&
                                filter === "All" &&
                                "active-filter"
                            }
                        >
                            All
                        </p>
                        <p
                            onClick={(e) => getFilter(e.target.innerHTML)}
                            className={
                                darkMode
                                    ? "button filter dark"
                                    : filter === 'Active' ? "button filter active-filter" : "button filter"
                            }
                        >
                            Active
                        </p>
                        <p
                            onClick={(e) => getFilter(e.target.innerHTML)}
                            className={
                                darkMode
                                    ? "button filter dark"
                                    : filter === 'Completed' ? "button filter active-filter" : "button filter"
                            }
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
