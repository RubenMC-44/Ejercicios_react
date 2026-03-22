import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Ejercicio9 () {
    const [todoLista,newTodo] = useState(() => {
        const guardadas = localStorage.getItem(`tareas`)
        return guardadas ? JSON.parse(guardadas) : []
    }
    )
    const [texto,newTexto] = useState('')

    const addTarea = () => {
        if (texto=== '') {
        alert('No se puede agregar una tarea vacía');
        return
        }
        const newTodoItem = {text: texto, completada: false};//De esta forma añadimos que se inicialicen siempre falsas
        newTodo([...todoLista, newTodoItem]);
        newTexto('')
        }

        const completarTarea = (index) => {
            newTodo(todoLista.map((todo,i) =>
                    i === index ? {...todo, completada: !todo.completada} : todo
        ))
        }

        const eliminarTarea = (index) => {
        newTodo(todoLista.filter((_, i) => i !== index))
        }
    
        const eliminarCompletadas = () => {
            newTodo(todoLista.filter((todo) => !todo.completada))
        }

useEffect(() => {
    if (todoLista) {
        localStorage.setItem('tareas',JSON.stringify(todoLista))
    }
},[todoLista]) 


    return (
        <div> 
            <h1>Ejercicio 9 </h1>
            <h2> <Link to="/">Volver al índice</Link> </h2>
            <div>
                <input 
                type="text" 
                value={texto}
                onChange={(e) => newTexto(e.target.value)}
                placeholder="Escribe tu tarea..."/>

                <button onClick={addTarea}> Añadir tarea </button> 
                <ul>
                    {todoLista.map((todo, index) => (
                    <li 
                        key={index} style={{textDecoration: todo.completada ? 'line-through' : 'none'}}> {todo.text}
                        <input type="checkbox" checked={todo.completada} onChange={() => completarTarea(index)}/>
                        <button onClick={() => eliminarTarea(index)}>Eliminar tarea</button>
                    </li>
                    ))}
                </ul>
                <div> 
                    <button onClick={eliminarCompletadas}>Eliminar completadas</button>              
                    </div>
            </div>
        </div>

    )
}
export default Ejercicio9