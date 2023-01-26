import Tasks from "./Tasks";
import Buttons from "./Buttons";
import "./Container.css";

function Container({ tasks, complete, setComplete }) {
    return (
        <div className="container">
            <Tasks complete={complete} setComplete={setComplete} />
            <Buttons tasks={tasks} />
        </div>
    );
}

export default Container;
