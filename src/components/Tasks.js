import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";
import { TasksContext } from "../context/TasksContext";
import Task from "./Task";
import "./Tasks.css";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Tasks() {
    const { tasks } = useContext(TasksContext);
    const { darkMode } = useContext(DarkModeContext);
    // const [draggedTask, setDraggedTask] = useState(tasks);

    // function handleOnDragEnd(result) {
    //     if (!result.destination) return;

    //     const items = Array.from(tasks);
    //     const [reorderedItem] = items.splice(result.source.index, 1);
    //     items.splice(result.destination.index, 0, reorderedItem);

    //     setDraggedTask(items);
    //     createTasks(items);
    // }

    return (
        // <DragDropContext onDragEnd={handleOnDragEnd}>
        //     <Droppable droppableId="draggedTask">
        //         {(provided) => (
        <div
        // className="draggedTask"
        // {...provided.droppableProps}
        // ref={provided.innerRef}
        >
            {tasks.map((task, index) => (
                // <Draggable
                //     index={index}
                //     key={task.title}
                //     draggableId={task.title}
                // >
                // {(provided) => (
                // <div
                //     key={task.title}
                //     ref={provided.innerRef}
                //     {...provided.draggableProps}
                //     {...provided.dragHandleProps}
                // >
                <Task
                    key={`${task}.${index}`}
                    task={task}
                    index={index}
                    darkMode={darkMode}
                />
                //             {provided.placeholder}
                //         </div>
                //     )}
                // </Draggable>
            ))}
        </div>
        // )}
        //     </Droppable>
        // </DragDropContext>
    );
}

export default Tasks;
