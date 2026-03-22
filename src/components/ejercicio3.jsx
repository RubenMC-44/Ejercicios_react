import { useState } from 'react'
import { Link } from 'react-router-dom'

function Ejercicio3() {
    const [todoList, setTodoList] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const agregarTodo = () => {
        if (newTodo=== '') {
        alert('No se puede agregar una tarea vacía');
        return
        }
        const newTodoItem = {text: newTodo };
        setTodoList([...todoList, newTodoItem]);
        setNewTodo('')
    };

    const EliminiarTodo = (index) => {
        setTodoList(todoList.filter((_, i) => i !== index))
    }
    
    return ( 
        <div>
            <h1> Ejercicio 3 </h1>
            <h2> <Link to="/">Volver al índice</Link> </h2>
        <div>
            <input 
                type = 'text' 
                value = {newTodo} 
                onChange = {(e) => setNewTodo(e.target.value)}
                required/>
            <button onClick = {agregarTodo}> Agregar tarea </button>
            <ul>
                {todoList.map((todo, index) => (
                    <li 
                    key={index}> {todo.text} 
                        <button onClick={() => EliminiarTodo(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
        </div>

    )
};
export default Ejercicio3