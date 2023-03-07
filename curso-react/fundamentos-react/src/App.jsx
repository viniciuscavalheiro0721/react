import ComParametro from './components/basics/ComParametro'
import Aluno from './components/basics/aluno'
import Fragmento from './components/basics/Fragments'
import Random from './components/basics/random'
import Card from "./components/layout/card"

export default function App(props) {
    return (
        <div id="App">
            <h1>FUNDAMENTOS REACT</h1>
            <Card titulo="Random">
                <Random></Random>
            </Card>

            <Card titulo="Fragmento">
                <Fragmento></Fragmento>
            </Card>

            <Card titulo="Terceiro componente">
                <Aluno
                    nota={8}
                    aluno="Vinicius"
                    titulo="Prova de Matematica">
                </Aluno>
            </Card>

            <Card titulo="Segundo componente">
            <ComParametro
                titulo="Segundo componente"
                subtitulo="Muito legal">
            </ComParametro>
            </Card>



        </div>

    )
}