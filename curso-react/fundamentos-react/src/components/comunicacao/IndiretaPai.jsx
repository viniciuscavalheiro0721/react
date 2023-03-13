import { useState } from "react"
import IndiretaFilho from "./IndiretaFilho"

export default props => {



    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(0)

    function FornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)

    }

    return (
        < div >
            <div><strong>TESTE PAI OK</strong></div>
            <div>
                <span>{nome} </span>
                <strong><span>{idade} </span></strong>
                <span>{nerd == true ? 'Verdadeiro' : 'Falso'} </span>
            </div>
            <IndiretaFilho quandoClicar={FornecerInformacoes}></IndiretaFilho>
        </div >
    )

}

