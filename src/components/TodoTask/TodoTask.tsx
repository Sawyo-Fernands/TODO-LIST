
import { listTask } from '../../interfaces';
import './styles.css'

    interface taskProps{
        task: listTask,
        deleteTask(DeleteTaskById:number):void,
    }

function TodoTask({ task,deleteTask }:taskProps) {
	
	return (
		<div className="card">
			<div>
                <p>{task.nameTask}</p>
            </div>

            <div className="line2" >
            <span className="btn-card" onClick={()=> deleteTask(task.id)}>X</span>
            </div>
		</div>
	);
}

export default TodoTask;
