import Task from "./Task";
import "./Tasks.css";

function Tasks(props) {
    return (
        <div className="tasks">
            <Task darkMode={props.darkMode}/>
            <Task darkMode={props.darkMode}/>
            <Task darkMode={props.darkMode}/>
        </div>
    );
}

export default Tasks;
