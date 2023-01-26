import { useState, useContext } from "react";
import "./Todo.css";
import Header from "./Header";
import NewTask from "./NewTask";
import Container from "./Container";
import { DarkModeContext } from "../context/DarkMode";

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [complete, setComplete] = useState(false);

    const { darkMode } = useContext(DarkModeContext);

    return (
        <>
            <div className={darkMode ? "App-dark" : "App"}>
                <Header />
                <NewTask setTasks={setTasks} />
                <Container tasks={tasks} complete={complete} setComplete={setComplete} />
                
            </div>
        </>
    );
}

export default Todo;
