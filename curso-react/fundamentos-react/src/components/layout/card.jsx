import "./Card.css"

export default function (props) {
    const style = {
        backgroundColor: props.color,
        "borderColor": props.color

    }

    return (
        <div className="Card" style={style}>

            <div className="Title">{props.titulo} </div>
            <div className="Content">
                {props.children}
            </div>

        </div>
    )


}