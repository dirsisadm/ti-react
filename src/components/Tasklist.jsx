import Taskitem from "./Taskitem"
export default function Tasklist({tareas,setTareas}) {
    return (
        <div class="container">
            <div class="row">
                <div class="col-12">
                <table class="table  table-striped">
                    <thead>
                        <tr>
                        <th>ID</th>
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
        </div>
    )
}