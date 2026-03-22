import { useState } from "react";   
import { Link } from 'react-router-dom';

function Ejercicio8 () {
    const [texto,newTexto] = useState ('')

return (
    <div>
        <h1> EJercicio 8 </h1>
        <h2> <Link to="/index">Volver al índice</Link> </h2>
        <div> 
        <textarea 
        type = 'text' 
        value = {texto} 
        onChange = {(e) => newTexto(e.target.value)} 
        placeholder="Escribe algo...."/>
        </div>
        <div> 
            <span>Numero de palabras: {texto.split(/\s+/).filter(p => p !== '').length}</span>
        </div>
        <div> 
            <span>Numero de Caracteres: {texto.replace(/\s/g, '').length}</span>
        </div>
    
    </div>

    )    
}
export default Ejercicio8