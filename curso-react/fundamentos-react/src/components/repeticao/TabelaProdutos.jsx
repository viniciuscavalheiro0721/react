import produtos from "../../data/produtos";
import "./TabelaProdutos.css"

export default (props) => {

    const tab = produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td className="tg-hmp3">{produto.id}</td>
                <td className="tg-hmp3">{produto.produto}</td>
                <td className="tg-hmp3">R$ {produto.preco.toFixed(2)}</td>
            </tr>
        )

    })
    return (
        <div>
            <table className="tg">
                <thead>
                    <tr>
                        <th className="tg-0lax">id</th>
                        <th className="tg-0lax">Descricao</th>
                        <th className="tg-0lax">Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {tab}

                </tbody>
            </table>
        </div>
    )
}