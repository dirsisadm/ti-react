import { useState , useEffect } from 'react'
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
  /*
const [tareas, setTareas] = useState([]);

const url = 'http://localhost:3001/api/list/'
const fetchApi = async () => {
  const response = await fetch(url)
  console.log(response)
}
useEffect(() => {
  fetchApi()
}, [])
*/

useEffect(() => {
  const task = JSON.parse(localStorage.getItem("Ltareas"))
  console.log(task)
  setTareas(task)
  
}, [])

/*
useEffect(() => {
  localStorage.getItem('Ltareas', JSON.stringify(tareas))
}, [tareas])
*/

return (
    <>
      <div className="container">
        <h1>Agenda</h1>
        
        <div className="row">
            <Tasklist 
            tareas={tareas}
            setTareas={setTareas} 
            />
            <Taskform
            tareas={tareas}
            setTareas={setTareas} 
            />
        </div>
        {/* MODO SIN COMPONENTES 
        <ul>{listtareas}</ul>
        */}      
      </div>
    </>
  )
}

export default App
