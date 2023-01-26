import "./App.css";
import { DarkModeProvider } from "./context/DarkMode";
import Todo from "./components/Todo";

function App() {
    return (
        <>
            <DarkModeProvider>
                <Todo />
            </DarkModeProvider>
        </>
    );
}

export default App;
