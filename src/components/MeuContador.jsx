import { useState } from "react";
import styles from '../assets/button.module.css'

function MeuContador() {

    const [contador, setContador] = useState(0)
    
    function aumentar() {
        setContador(contador+1)
    }
    function diminuir() {
        setContador(contador-1)
    }
    return (
        <div className='container'>
            <h1>Meu contador </h1>
            <h3>{contador}</h3>
            <div className="button">
            <button className={styles.myButton} onClick={aumentar}>aumentar</button>
            <button className={styles.myButton2} onClick={diminuir}>diminuir</button>
            </div>
            
            
        </div>
    )
}

export default MeuContador