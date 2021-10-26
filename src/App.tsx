import { useState } from "react";
import TodoTask from "./components/TodoTask/TodoTask";
import { listTask } from "./interfaces";

import './styles/styles.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

	const [task,setTask]=useState("")

	const [list,setList]=useState<listTask[]>([])


		function addTask() :void{

			if(task==""){

				toast.error("Digite alguma coisa !")

			}else{

				const idRandom=(num : number)=>Math.floor( Math.random() * num )

				const newTask={
					id:idRandom(999999),
					nameTask:task
				}
	
				setList([...list,newTask])	
				toast.success("Task adicionada com sucesso !")

			}
		}

		function deleteTask(DeleteTaskById:number):void{


			setList(list.filter((taskName)=> taskName.id!==DeleteTaskById))

		}

	return (
		<div className="App">

		<ToastContainer
			autoClose={2500}
			pauseOnHover={false}
		/>
			<header>

				<h2>Lists</h2>

				<input
					type="text" autoComplete="off" 
					placeholder="Escrever task..." 
					name="task"
					className="input"
					value={task}
					onChange={event=>setTask(event.target.value)}
				/>

				<button type="submit" className="btn-header" onClick={addTask}>Adicionar Task</button>
			</header>
			
			<div className="line"></div>

			{list.map((value,index)=>(

				<TodoTask key={index} task={value} deleteTask={deleteTask} />
			) )
			}
			
		</div>
	);

}

export default App;
