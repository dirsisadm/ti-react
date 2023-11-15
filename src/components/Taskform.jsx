import { useState } from "react"
import './Taskform.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

export default function Taskform({tareas,setTareas}) {
    const [valor, setValor] = useState("");

    const agregaTarea = (uvalor) => {
        //BUSCA ULTIMA TAREA PARA AGREGAR EL SIGUIENTE
        let ultimo = Date.now();
        //CREA NUEVA TAREA
        const newTask = {"id":ultimo,"descrip":uvalor,"estado":0};
        //AGREGA TAREA
        setTareas([...tareas,newTask]);
        //ARCHIV EN LOCALSTORAGE
        //localStorage.setItem('Ltareas', JSON.stringify(tareas));
        //LIMPIAR INMPUT PARA EL PROXIMA AGREGADO
        setValor('');
    } 
    return (
        <div className="row justify-content-md-center">
            <div className="card text-bg-secondary mb-6 col-8">
                <div className="card-body">
                     <h5 className="card-title">Nueva Tarea</h5>
                     <div className="mb-3">
                        <label className="form-label">Motivo</label>
                        <input type="text" className="form-control" value={valor} onChange={(e) => setValor(e.target.value)}/>
                    </div>	
                    <div className="mb-3">
                        <button type="button" className="btn btn-primary" onClick={() => agregaTarea(valor)}>
                        <FontAwesomeIcon icon={faPlus}/> Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}