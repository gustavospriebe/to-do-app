import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const handleChange = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <div className={darkMode ? "App-dark" : "App"}>
                <Header handleChange={handleChange} darkMode={darkMode} />
                <NewTask darkMode={darkMode} />
                <Tasks darkMode={darkMode} />
            </div>
        </>
    );
}

export default App;
