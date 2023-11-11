import { useState } from "react"
import './Taskform.css'

export default function Taskform({tareas,setTareas}) {
    const [valor, setValor] = useState("");

    const agregaTarea = (uvalor) => {
        let ultimo = tareas.length;
        const newTarea = {"id":ultimo+1,"descrip":uvalor,"estado":0};
        setTareas([...tareas,newTarea]);
    } 
    return (
        <div id="Taskform">
            <h1>Nueva Tarea</h1>	
		    <label>Motivo:</label><input value={valor} onChange={(e) => setValor(e.target.value)}/>
		    <button onClick={() => agregaTarea(valor)}>Agregar</button>
        </div>
    )
}