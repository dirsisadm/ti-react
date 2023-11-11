import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Tareas from './assets/tareas';
import Tasklist from './components/Tasklist';
import Taskform from './components/Taskform';

function App() {

  {/*  MODO SIN COMPONENTES 
    const listtareas = tareas.map((tarea) =>    <li>{tarea}</li> );  
  */}

  {/*Trae lsita de assets/tareas*/}
 
  const [tareas, setTareas] = useState(Tareas);
  return (
    <>
      <div>
        <h1>Agenda</h1>
        <hr/>
        <Tasklist 
        tareas={tareas}
        setTareas={setTareas} 
        />
        <Taskform
        tareas={tareas}
        setTareas={setTareas} 
        />

      {/* MODO SIN COMPONENTES 
      <ul>{listtareas}</ul>
      */}      

      </div>
    </>
  )
}

export default App
