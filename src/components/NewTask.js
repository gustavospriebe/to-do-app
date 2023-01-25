import "./NewTask.css";

function Task(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={props.darkMode ? "dark" : ""} onSubmit={handleSubmit}>
            <button className={props.darkMode ? "dark" : ""}></button>
            <input
                className={props.darkMode ? "dark" : ""}
                type="text"
                placeholder="Create a new todo..."
            />
        </form>
    );
}

export default Task;
