import "./App.css"
import Aluno from './components/basics/aluno'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragments'
import Random from './components/basics/random'
import Card from "./components/layout/card"
import Familia from "./components/basics/Familia"
import FamiliaMembro from "./components/basics/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ParOuImpar from "./components/condicional/ParOuImpar"
import If from "./components/condicional/If"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Input from "./components/formulario/Input"
import Contador from "./components/contador/Contador"
import Mega from "./components/mega/Mega"

export default function App(props) {
    return (
        <div className="App">
            <h1>FUNDAMENTOS REACT</h1>
            <div className='Cards'>
                <Card titulo="Mega">
                    <Mega qtd={7} max={60}></Mega>
                </Card>
                <Card titulo="Contador">
                    <Contador numeroInicial={10} passoInicial={2}></Contador>
                </Card>
                <Card titulo="Componente Controlado">
                    <Input></Input>
                </Card>
                <Card titulo="Relacao Indireta 'Filho' e 'Pai'">
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo="Relacao Direta 'Pai' e 'Filho'">
                    <DiretaPai></DiretaPai>
                </Card>
                <Card titulo="Renderizacao Condicional">
                    <ParOuImpar numero={78}></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Vinicius' }}></UsuarioInfo>
                </Card>
                <Card titulo="Par ou Impar">
                    <ParOuImpar
                        numero={78}></ParOuImpar>
                </Card>
                <Card titulo="Tabela Produtos">
                    <TabelaProdutos></TabelaProdutos>
                </Card>
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