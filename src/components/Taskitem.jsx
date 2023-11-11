import './Taskitem.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash,faBell} from '@fortawesome/free-solid-svg-icons';

export default function Taskitem({tarea,tareas,setTareas}) {
  
    const eliminaTarea = (uid)=>{
        const newTask = tareas.filter((tarea) => tarea.id !==uid);
        setTareas(newTask);
    }
    const editaEstado = (uid,uestado) => {
        const newTask = tareas.map((tarea) => {
            if (tarea.id == uid){
                return {
                    ...tarea,estado: uestado==0?1:0
                };
            }
            return tarea
        });
        setTareas(newTask);
    }    
 
    return (<tr>
           <td scope="row">{tarea.id}</td>
           <td><span class={tarea.estado==0?"pendiente":"completado"}>{tarea.descrip}</span></td>
           <td>{tarea.estado==0?"Pendiente":"Completado"}</td>
           <td><button class="btn btn-danger" onClick={() => eliminaTarea(tarea.id)}><FontAwesomeIcon icon={faTrash}/></button>
           <button class="btn btn-primary" onClick={() => editaEstado(tarea.id,tarea.estado)}><FontAwesomeIcon icon={faBell}/></button></td>
           </tr>
    )
}