import { useParams } from "react-router-dom"

export default props => {
    const { id } = useParams()
    return (
        <aside className='Param'>
            <h1>Param</h1>
            <p>Valor: {id}!</p>
        </aside>
    )
}