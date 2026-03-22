import { useState } from "react";
import { Link } from 'react-router-dom'

function Ejercicio4() {
    const listaPredet = ['perro','gato','pez', 'gallina'];
    const [busqueda,newBusqueda] = useState ('');




    return ( 
        <div>
            <h1> Ejercicio 4 </h1>
            <h2> <Link to="/index">Volver al índice</Link> </h2>
        <input  
                type = 'text' 
                value = {busqueda} 
                onChange = {(e) => newBusqueda(e.target.value)} 
                placeholder="Escribe algo..." />
                <ul>
                    {listaPredet
                    .filter(elemento => elemento.includes(busqueda))
                    .map ((elemento, index) => (
                <li
                    key = {index}> {elemento}
                </li>
            ))}
        </ul>
        </div>
)
}

export default Ejercicio4
