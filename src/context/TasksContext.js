import { createContext, useState } from "react";

const TasksContext = createContext();

function TasksProvider({ children }) {
    
    const [tasks, setTasks] = useState([]);

    const handleTasks = (value) =>
        setTasks((prevState) => [...prevState, value]);

    console.log(tasks);

    return (
        <div>
            <TasksContext.Provider value={{ tasks, handleTasks }}>
                {children}
            </TasksContext.Provider>
        </div>
    );
}

export { TasksProvider, TasksContext };
