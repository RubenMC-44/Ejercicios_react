import { Link } from 'react-router-dom'


function Index() {
    return (
        <div>
            <h1>Índice de ejercicios React</h1>
        <div>
            <ol>
            <li><Link to="/ejercicio1">Ejercicio 1</Link> </li>
            <li><Link to="/ejercicio2">Ejercicio 2</Link> </li>
            <li><Link to="/ejercicio3">Ejercicio 3</Link> </li>
            <li><Link to="/ejercicio4">Ejercicio 4</Link></li>
            <li><Link to="/ejercicio5">Ejercicio 5</Link></li>
            <li><Link to="/ejercicio6">Ejercicio 6</Link></li>
            <li><Link to="/ejercicio7">Ejercicio 7</Link></li>
            <li><Link to="/ejercicio8">Ejercicio 8</Link></li>
            <li><Link to="/ejercicio9">Ejercicio 9</Link></li>
            </ol>
            </div>
        </div>
    )
}

export default Index