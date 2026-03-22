import { useState } from "react";
import { Link } from 'react-router-dom'

function Ejercicio5 () {

    const [numero1,newNumero1] = useState (0) 
    const [numero2,newNumero2] = useState (0)
    const [resultado,newResultado] = useState ('')
    const validar = () => {
        if  (numero1 === '' || numero2 ===''){
            alert('Error: Debes introducir 2 números')
            return false
        }
        return true
    }

    const sumar = () =>{
        if (!validar()) return 
        newResultado(Number(numero1) + Number(numero2))
        
    }
    const restar = () =>{
        if (!validar()) return 
        newResultado(Number(numero1) - Number(numero2))
        
        
    }
    const multiplicar = () =>{
        if (!validar()) return 
        newResultado(Number(numero1) * Number(numero2))
    }
    const dividir = () => {
    if (!validar()) return
    if (numero2 == 0) {
        alert('Error: No se puede dividir por 0')
        newResultado('No se puede Realizar operación')
        return
    }
    newResultado(Number(numero1) / Number(numero2))
}



return (
    <div>
        <h1> Ejercicio 5</h1>
        <h2> <Link to="/index">Volver al índice</Link> </h2>
        <div>
            <input 
            type="number"
            value={numero1}
            onChange = {(e) => newNumero1(e.target.value)}
            placeholder="Escribe el primer número..."
            required/> 
            <input 
            type="number"  
            value={numero2}
            onChange = {(e) => newNumero2(e.target.value)}
            placeholder="Escribe el segundo número..."
            requiered/>
        <div>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={multiplicar}>Multiplicar</button>
        <button onClick={dividir}>Dividir</button>
        </div>
        </div>
        <div> 
            <span> Resultado: {resultado} </span>
        </div>
        </div> 
    )
}

export default Ejercicio5
