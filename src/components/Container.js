import Tasks from "./Tasks";
import Buttons from "./Buttons";
import "./Container.css";

function Container() {
    return (
        <div className="container">
            <Tasks />
            <Buttons />
        </div>
    );
}

export default Container;
