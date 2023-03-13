import React, { useState } from "react";
import "./Input.css"


export default props => {
    const [valor, setValor] = useState('Inicial')
    function quandoMudar(e) {
        setValor(e.target.value)

    }
    return (
        <div className="teste-input">
            <input value={valor} onChange={quandoMudar} />
            <input value={undefined} />
        </div>
    )
}