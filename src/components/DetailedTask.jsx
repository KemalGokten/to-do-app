import { useLocation } from "react-router-dom";


const DetailedTask = () => {
    const location = useLocation();
    const task = location.state.task;
    console.log(task);
    return ( 
        <div>
            <p>Task id: {task.id}</p>
            <p>Task: {task.task}</p>
            <p>Task status: {task.completed.toString()}</p>
        </div>
     );
}
 
export default DetailedTask;