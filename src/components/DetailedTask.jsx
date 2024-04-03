import { useLocation } from "react-router-dom";


const DetailedTask = () => {
    const location = useLocation();
    const task = location.state.task;
    console.log(task);
    return ( 
        <div>
            <p>{task.id}</p>
            <p>{task.task}</p>
            <p>{task.completed.toString()}</p>
        </div>
     );
}
 
export default DetailedTask;