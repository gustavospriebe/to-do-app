import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [appTheme, setAppTheme] = useState("App");

    useEffect(() => {
        darkMode ? setAppTheme("App-dark") : setAppTheme("App");
    }, [darkMode]);

    const handleChange = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <div className={appTheme}>
                <Header handleChange={handleChange} darkMode={darkMode} />
            </div>
        </>
    );
}

export default App;
