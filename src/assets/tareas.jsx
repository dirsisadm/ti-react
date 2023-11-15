
/*
const Tareas = [
    {"id":1,"descrip":"Tarea1","estado":0},
    {"id":2,"descrip":"Tarea1","estado":0}
]
*/

const Tareas = JSON.parse(localStorage.getItem('Ltareas'));
export default Tareas