import { createContext, useState } from "react";
import { useEffect } from "react";

const TasksContext = createContext();

function getInitialState() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

function TasksProvider({ children }) {
    const [tasks, setTasks] = useState(getInitialState);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const createTasks = (value) => {
        setTasks((prevState) => [
            ...prevState,
            {
                title: value,
                completed: false,
            },
        ]);
    };

    const completeTasks = (task) => {
        const newTasks = [...tasks];
        newTasks[task].completed = !tasks[task].completed;
        setTasks(newTasks);
    };

    const deleteTasks = (taskToDelete) => {
        tasks.splice(taskToDelete, 1);

        const newTasks = [...tasks];
        newTasks.splice(taskToDelete, 0);
        setTasks(newTasks);
    };

    const deleteAllTasks = () => {
        setTasks(tasks.filter((task) => task.completed !== true));
    };

    const getFilter = (event) => {
        setFilter(event);
    };

    return (
        <div>
            <TasksContext.Provider
                value={{
                    createTasks,
                    deleteTasks,
                    deleteAllTasks,
                    tasks,
                    completeTasks,
                    getFilter,
                    filter,
                }}
            >
                {children}
            </TasksContext.Provider>
        </div>
    );
}

export { TasksProvider, TasksContext };
