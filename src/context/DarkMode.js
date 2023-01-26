import { createContext, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({children}) {
    const [darkMode, setDarkModes] = useState(false);

    const toggleDarkMode = () => setDarkModes(!darkMode);

    return (
        <div>
            <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
                {children}
            </DarkModeContext.Provider>
        </div>
    );
}

export { DarkModeProvider, DarkModeContext };
