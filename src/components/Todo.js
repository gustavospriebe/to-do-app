import { useContext } from "react";
import "./Todo.css";
import Header from "./Header";
import NewTask from "./NewTask";
import Container from "./Container";
import Footer from "./Footer";
import { DarkModeContext } from "../context/DarkMode";
import { TasksProvider } from "../context/TasksContext";

function Todo() {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <>
            <div className={darkMode ? "App-dark" : "App"}>
                <TasksProvider>
                    <Header />
                    <NewTask />
                    <Container />
                    {/* <p className="dnd">Drag and drop to reorder the list</p> */}
                    {/* <Footer /> */}
                </TasksProvider>
            </div>
        </>
    );
}

export default Todo;
