import React, { useState } from "react";


const initialState = {
    number: 1234,
    text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialState)


const Store = props => {

    const [state, setState] = useState(initialState)

    function updateState(key, value) {
        setState(
            {
                ...state, //recupera todo os atributos do obk state
                [key]: value //altera o valor da key
            }
        )

    }


    return (
        <AppContext.Provider value={

            {
                number: state.number,
                text: state.text,
                setNumber: n => updateState('number', n),
                setText: t => updateState('text', t)
            }


        }>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store