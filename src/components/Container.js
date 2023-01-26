import Tasks from "./Tasks";
import Buttons from "./Buttons";

function Container({tasks, complete, setComplete}) {
    return (
        <>
            <Tasks
                tasks={tasks}
                complete={complete}
                setComplete={setComplete}
            />
            {tasks.length > 0 && <Buttons tasks={tasks} />}
        </>
    );
}

export default Container