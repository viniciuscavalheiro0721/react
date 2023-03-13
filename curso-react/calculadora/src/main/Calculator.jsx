import React, { useState } from "react";
import "./Calculator.css"
import Button from "../components/Button";
import Display from "../components/Display";









export default props => {

    const [displayValue, setDisplayValue] = useState('0')
    const [clearDisplay, setClearDisplay] = useState(false)
    const [operation, setOp] = useState(null)
    const [values, setValues] = useState([0, 0])
    const [current, setCurrent] = useState(0)


    function initialState() {
        setDisplayValue('0')
        setClearDisplay(false)
        setOp(null)
        setValues([0, 0])
        setCurrent(0)
    }

    function addDig(n) {

        if (n === '.' && displayValue.includes('.')) {
            return
        }

        const clearDisplayN = displayValue === '0' || clearDisplay
        const currentN = clearDisplayN ? '' : displayValue
        const displayValueN = currentN + n

        setDisplayValue(displayValueN)
        setClearDisplay(false)

        if (n !== '.') {
            const i = current
            const newValue = parseFloat(displayValueN)
            const ValuesN = values
            ValuesN[i] = newValue
            setValues(ValuesN)
            console.log(values)
        }

        console.log("addDig")
        console.log(n)
    }

    function minus(op) {
        if (displayValue === '0') {
            return
        } else {
            const ValuesN = values

            ValuesN[current] = -(ValuesN[current])

            setDisplayValue(ValuesN[current])
            setValues(ValuesN)
        }

    }

    function setOperation(op) {
        if (current === 0 && op !== '√x') {
            setOp(op)
            setCurrent(1)
            setClearDisplay(true)
            return
        } else if (op === '√x') {
            if (current === 1) {
                initialState()
                setDisplayValue("Error")
                setClearDisplay(true)
            } else {
                const ValuesN = values

                try {
                    ValuesN[0] = Math.sqrt(ValuesN[0])
                } catch (e) {
                    initialState()
                    setDisplayValue("Error")
                    setClearDisplay(true)

                }

                ValuesN[1] = 0
                setDisplayValue(ValuesN[0])
                setOp(null)
                setClearDisplay(false)
                setValues(ValuesN)

            }

        } else if (operation === 'X^') {
            const equals = op === '=' ? true : false
            const currentOperation = operation
            const ValuesN = values

            try {
                ValuesN[0] = ValuesN[0] ** ValuesN[1]
            } catch (e) {
                ValuesN[0] = ValuesN[0]

            }

            ValuesN[1] = 0
            setDisplayValue(ValuesN[0])
            setOp(equals ? null : currentOperation)
            setClearDisplay(!equals)
            setValues(ValuesN)

            if (equals) {
                setCurrent(0)
            }


        } else {
            const equals = op === '=' ? true : false
            const currentOperation = operation
            const ValuesN = values

            console.log('operacao atual', operation, "current", current)


            try {

                ValuesN[0] = eval(`${ValuesN[0]} ${currentOperation} ${ValuesN[1]}`)
            } catch (e) {
                ValuesN[0] = values[0]
            }
            ValuesN[1] = 0
            setDisplayValue(ValuesN[0])
            setOp(equals ? null : currentOperation)
            setClearDisplay(!equals)
            setValues(ValuesN)

            if (equals) {
                setCurrent(0)
            }



        }
        console.log("setOperation")
        console.log(op)
    }

    function clearMemory(n) {
        initialState()
        console.log("clearMemory")
        console.log(n)
    }

    return (
        <div className="calculator">
            <Display display={displayValue}></Display>
            <Button label="AC" click={clearMemory}></Button>
            <Button label="√x" click={setOperation}></Button>
            <Button label="X^" click={setOperation}></Button>
            <Button label="/" operation click={setOperation}></Button>
            <Button label="7" click={addDig}></Button>
            <Button label="8" click={addDig}></Button>
            <Button label="9" click={addDig}></Button>
            <Button label="*" operation click={setOperation}></Button>
            <Button label="4" click={addDig}></Button>
            <Button label="5" click={addDig}></Button>
            <Button label="6" click={addDig}></Button>
            <Button label="-" operation click={setOperation}></Button>
            <Button label="1" click={addDig}></Button>
            <Button label="2" click={addDig}></Button>
            <Button label="3" click={addDig}></Button>
            <Button label="+" operation click={setOperation}></Button>
            <Button label="0" click={addDig} ></Button>
            <Button label="+/-" click={minus}></Button>
            <Button label="." click={addDig}></Button>
            <Button label="=" operation click={setOperation}></Button>





        </div>
    )
}