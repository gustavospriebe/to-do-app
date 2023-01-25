import './Task.css'

function Task(props) {



    return (
        <div className={props.darkMode ? "task dark" : "task"} >
            <button className={props.darkMode ? "dark" : ""}></button>
            <input
                className={props.darkMode ? "dark" : ""}
                type="text"
                placeholder="Create a new todo..."
            />
        </div>
    );
}

export default Task;
