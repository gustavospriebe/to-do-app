import { createContext, useState } from "react";

const TasksContext = createContext();

function TasksProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    const createTasks = (value) => {
        setTasks((prevState) => [
            ...prevState,
            {
                title: value,
                completed: false,
            },
        ]);
    };

    // const

    const deleteTasks = (taskToDelete) => {
        tasks.splice(taskToDelete, 1);

        const newTasks = [...tasks];
        newTasks.splice(taskToDelete, 0);
        setTasks(newTasks);
    };

    const deleteAllTasks = (taskToDelete) => {
        setTasks([]);
    };

    return (
        <div>
            <TasksContext.Provider
                value={{
                    createTasks,
                    deleteTasks,
                    deleteAllTasks,
                    tasks,
                }}
            >
                {children}
            </TasksContext.Provider>
        </div>
    );
}

export { TasksProvider, TasksContext };
