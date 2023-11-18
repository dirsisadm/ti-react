import { useState , useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Tareas from './assets/tareas';
import Tasklist from './components/Tasklist';
import Taskform from './components/Taskform';


function App() {

const [tareas, setTareas] = useState([]);
const Ltareas = JSON.parse(localStorage.getItem('Ltareas'));
console.log(Ltareas);
useEffect(() => {
if (Ltareas){
  setTareas(Ltareas)
}else{
  //setTareas(Tareas)
}
}, [])

return (
    <>
      <div className="container">
        <p className="fs-1 text-center">Agenda</p>
        
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
