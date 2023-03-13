export default props => {

    return (
        < div >
            <div>
                <strong>FILHO</strong>
            </div>
            <button onClick={
                function (e) {
                    props.quandoClicar('joao', 53, true)
                }
            }>Fornecer Informacoes</button>
        </div >
    )

}