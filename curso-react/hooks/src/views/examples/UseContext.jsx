import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../components/data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle'
import { AppContext } from '../../components/data/store'
const UseContext = (props) => {

    const context = useContext(DataContext)
    const { number, setNumber } = useContext(AppContext)

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <div className="center">
                <span className="text">{context.text}</span>
            </div>
            <SectionTitle
                title="Exercicio #02"
            />
            <div className="center">
                <span className="text">{number}</span>
                <button className="btn" onClick={() => setNumber(number + 1)}>+</button>
            </div>
        </div>
    )
}

export default UseContext
