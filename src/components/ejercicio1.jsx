import { useState } from 'react'
import { Link } from 'react-router-dom'

function Ejercicio1 () {
    const [color,setColor] = useState('#ffffff')

    const changeColor = () => {
    const newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(newColor)

    }; 
    return (
        
    <div style={{ backgroundColor: color, minHeight: '100vh' }}>
        <h2> <Link to="/index">Volver al índice</Link> </h2>
        <div> 
            <h1 style = {{color: 'black'}}> Ejercicio 1 </h1>
            <button onClick={changeColor}>
            Cambiar color
            </button>
        </div>
    </div>
)}
export default Ejercicio1