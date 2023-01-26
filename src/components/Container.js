import Tasks from "./Tasks";
import Buttons from "./Buttons";
import "./Container.css";

function Container({ tasks, complete, setComplete }) {
    return (
        <div className="container">
            <Tasks
                tasks={tasks}
                complete={complete}
                setComplete={setComplete}
            />
            {tasks.length > 0 && <Buttons tasks={tasks} />}
        </div>
    );
}

export default Container;
