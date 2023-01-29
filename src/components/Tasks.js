import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";
import { TasksContext } from "../context/TasksContext";
import Task from "./Task";
import "./Tasks.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Tasks() {
    const [draggedTask, setDraggedTask] = useState(finalSpaceTask)
    const { tasks } = useContext(TasksContext);
    const { darkMode } = useContext(DarkModeContext);

    return (
        <DragDropContext>
            <Droppable droppableId="tasks">
                {(provided) => (
                    <div
                        className="tasks"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {tasks.map((task, index) => (
                            <Draggable
                                index={index}
                                key={task.title}
                                draggableId={task.title}
                            >
                                {(provided) => (
                                    <div
                                        key={task.title}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <Task
                                            key={`${task}.${index}`}
                                            task={task}
                                            index={index}
                                            darkMode={darkMode}
                                        />
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default Tasks;
