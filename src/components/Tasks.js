import Task from "./Task";
import Buttons from "./Buttons";
import "./Tasks.css";

function Tasks({ darkMode, tasks }) {
    console.log(tasks);

    return (
        <div className="tasks">
            {tasks.map((task, index) => (
                <Task key={`${task}.${index}`} task={task} darkMode={darkMode} />
            ))}
            {tasks.length > 0 && <Buttons />}
        </div>
    );
}

export default Tasks;
