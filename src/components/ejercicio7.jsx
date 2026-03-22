import { useState } from "react";
import { Link } from 'react-router-dom';

function Ejercicio7(){
    const [longuitud,newlonguitud] = useState('')
    const [pass,newPass] = useState('')

    const nuevaPass = () => {
        if (longuitud === '' || longuitud<4) {
            alert('Error: La longitud debe ser un número mayor o igual a 4.')
            return
            } 
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'
        let password = ''
        for (let i = 0; i < longuitud; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        password += caracteres.charAt(indice);
        }
        newPass(password);
    
}


    return(
        <div>
            <h1> Ejercicio 7</h1>
            <h2> <Link to="/">Volver al índice</Link> </h2>
        <div>
        <input
                type = 'text' 
                value = {longuitud} 
                onChange = {(e) => newlonguitud(e.target.value)} 
                placeholder="Escribe la longuitud de tu contraseña..."/>     
                <button onClick={nuevaPass}>Generar nueva contraseña</button>
                <div> 
                    <span> Contraseña generada: {pass} </span>
                </div>
            </div>   
        </div>




    )
}
export default Ejercicio7