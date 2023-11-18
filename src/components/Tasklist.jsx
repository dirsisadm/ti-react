import Taskitem from "./Taskitem"
export default function Tasklist({tareas,setTareas}) {
    return (
            <div className="row">
                <div className="col-12">
                <table className="table  table-striped table-primary">
                    <thead>
                        <tr>
                        <th>Motivo</th>
                        <th>Estado</th>
                        <th>Accion</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tareas.map((tarea) => {
                            return(
                            <Taskitem 
                            tarea={tarea}
                            tareas={tareas}
                            setTareas={setTareas}
                            />
                            )
                        })}
                         </tbody>
                    </table>                
                </div>
            </div>
    )
}