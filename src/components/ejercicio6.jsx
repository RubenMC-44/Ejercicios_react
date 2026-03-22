import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

function Ejercicio6 () {
    const [horas,newHoras] = useState(0)
    const [minutos,newMinutos] = useState(0)
    const [segundos,newSegundos] = useState(0) 
    const [on, onState] = useState(false)


useEffect(() => {
    if (on) {
    const temporizador = setInterval(() =>{
        newSegundos(prev => {
            if (prev === 59) {
                newMinutos(prevMin => {
                    if (prevMin === 59) {
                        newHoras(prevH => prevH + 1)
                            return 0
                        }
                    return prevMin + 1
                    })
                return 0
                }
        return prev + 1
            }) 
    },1000)
    return () => clearInterval(temporizador)
    }   
},[on])

const iniciar= () =>{
    onState(true)
    return
} 

const pausar= () =>{
    onState(false)
    return
} 
    
const reiniciar = () => {
    onState(false)
    newHoras(0)
    newMinutos(0)
    newSegundos(0) 
    return
}




return (
    <div>
    <h1> Ejercicio 6</h1>
    <h2> <Link to="/">Volver al índice</Link> </h2>
    <div> {String(horas).padStart(2,'0')}:{String(minutos).padStart(2,'0')}:{String(segundos).padStart(2,'0')}</div>
    <div> 
        <button onClick={iniciar}>Iniciar</button>
        <button onClick={pausar}>Pausar</button>
        <button onClick={reiniciar}>Reiniciar</button>
    </div>
    </div>
    )
}
export default Ejercicio6