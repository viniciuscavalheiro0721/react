import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [parimpar, setParImpar] = useState("")

    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    function calcFatorial(n) {
        if (n < 0) return -1
        if (n === 0) return 1

        return calcFatorial(n - 1) * n
    }

    function calcParImpar(n) {
        let x = n % 2
        if (x === 0) { return "Par" }
        return "Impar"

    }

    useEffect(function () {
        setParImpar(calcParImpar(number))
    }, [number])


    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle
                title="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{fatorial === -1 ? "Não Existe" : fatorial}</span>
                </div>

                <input
                    type="number"
                    className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)} />
            </div>


            <SectionTitle
                title="Exercicio #02" />
            <div className="center">
                <div>
                    <span className="text">Par ou Impar:</span>
                    <span className="text red">{parimpar}</span>
                </div>

            </div>
        </div>
    )
}

export default UseEffect
