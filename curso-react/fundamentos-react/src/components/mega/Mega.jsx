import React, { useState } from "react";
import "./Mega.css"

export default props => {



    function att() {

        var arrays = gerarNumeros(7, 60)


        arrays.map(array => {

            return (
                <div className="number">12</div>
            )
        })


    }

    function gerarNumeros(qtde, max) {
        var num, sugestao = false, result = []

        for (let i = 0; i < qtde; i++) {
            sugestao = false

            while (!sugestao) {
                num = Math.floor(Math.random() * max) + 1;
                sugestao = !(result.includes(num))
            }
            result.push(num)

        }

        result = result.sort((a, b) => a - b)

        return result;
    }
    const numerosIniciais = gerarNumeros(7, 60)
    const [numeros, setNumeros] = useState(numerosIniciais)

    const lis = numeros.map(numero => {

        return (

            <div className="number">{numero}</div>

        )
    })



    return (

        <div className="container">
            <h1>Sorteador Mega</h1>
            <div className="numbers">
                {lis}
            </div>
            <button className="btn" onClick={_ => setNumeros(gerarNumeros(7, 60))}>Sortear</button>
        </div>

    )
}








