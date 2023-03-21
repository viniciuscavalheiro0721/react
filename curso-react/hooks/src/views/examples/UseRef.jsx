import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {

    const [text, setText] = useState("")
    const [text2, setText2] = useState("")
    const count = useRef(0)

    // count.current = count.current + 1
    useEffect(function () { count.current = count.current + 1 }, [text, text2])


    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle
                title="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{text} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" value={text} onChange={e => setText(e.target.value)} />
            </div>
            <SectionTitle
                title="Exercicio #02" />
            <div className="center">
                <input type="text" className="input" value={text2} onChange={e => setText2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
