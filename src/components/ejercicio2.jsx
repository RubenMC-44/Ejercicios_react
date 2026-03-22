import { useState } from 'react'
import { Link } from 'react-router-dom'

function Ejercicio2 () {
    const [contador,setcontador] = useState('0')

    const sumarClicks = () => {
    const nuevoClick = parseInt(contador) + 1;
    setcontador(nuevoClick.toString())

    }; 
    return (
        <div>
        <div> 
            <h1> Ejercicio 2 </h1>
            <h2> <Link to="/index">Volver al índice</Link> </h2>
            <button onClick={sumarClicks}>
            Sumar clicks {contador}
            </button>
        </div>
        </div>
)}

export default Ejercicio2
