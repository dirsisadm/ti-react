import { useState } from "react"
import './Taskform.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

export default function Taskform({tareas,setTareas}) {
    const [valor, setValor] = useState("");

    const agregaTarea = (uvalor) => {
        //BUSCA ULTIMA TAREA PARA AGREGAR EL SIGUIENTE
        let ultimo = tareas.length;
        //CREA NUEVA TAREA
        const newTarea = {"id":ultimo+1,"descrip":uvalor,"estado":0};
        //AGREGA TAREA
        setTareas([...tareas,newTarea]);
        //LIMPIAR INMPUT PARA EL PROXIMA AGREGADO
        setValor('');
    } 
    return (
        <div class="row">
            <div class="card">
                <div class="card-body">
                     <h5 class="card-title">Nueva Tarea</h5>
                     <div class="mb-3">
                        <label class="form-label">Motivo</label>
                        <input type="text" class="form-control" value={valor} onChange={(e) => setValor(e.target.value)}/>
                    </div>	
                    <div class="mb-3">
                        <button type="button" class="btn btn-primary" onClick={() => agregaTarea(valor)}>
                        <FontAwesomeIcon icon={faPlus}/> Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}