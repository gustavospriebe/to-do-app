import Task from "./Task";
import "./Tasks.css";

function Tasks({ darkMode, tasks }) {
    console.log(tasks);

    return (
        <div className="tasks">
            {tasks.map((task) => (
                <Task key={task} task={task} darkMode={darkMode} />
            ))}
        </div>
    );
}

export default Tasks;
