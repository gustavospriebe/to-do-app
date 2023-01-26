import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [tasks, setTasks] = useState([]);

    const handleChange = () => {
        setDarkMode(!darkMode);
    };

    console.log(tasks);

    return (
        <>
            <div className={darkMode ? "App-dark" : "App"}>
                <Header handleChange={handleChange} darkMode={darkMode} />
                <NewTask darkMode={darkMode} setTasks={setTasks} />
                <Tasks darkMode={darkMode} tasks={tasks} />
            </div>
        </>
    );
}

export default App;
