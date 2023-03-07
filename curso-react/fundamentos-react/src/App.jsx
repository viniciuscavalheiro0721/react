import "./App.css"
import Aluno from './components/basics/aluno'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragments'
import Random from './components/basics/random'
import Card from "./components/layout/card"
import Familia from "./components/basics/Familia"
import FamiliaMembro from "./components/basics/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"


export default function App(props) {
    return (
        <div className="App">
            <h1>FUNDAMENTOS REACT</h1>
            <div className='Cards'>
                <Card titulo="Lista Alunos">
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="Familia">
                    <Familia sobrenome="Cavalheiro">

                        <FamiliaMembro nome="Vinicius" sobrenome={props.sobrenome}></FamiliaMembro>
                        <FamiliaMembro nome="Bruno" sobrenome={props.sobrenome}></FamiliaMembro>
                        <FamiliaMembro nome="Joao Vitor" sobrenome={props.sobrenome}></FamiliaMembro>

                    </Familia>
                </Card>


                <Card titulo="Random" color="blue">
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
                        titulo="comparametro"
                        subtitulo="nada legal">
                    </ComParametro>
                </Card>

            </div>



        </div>

    )
}