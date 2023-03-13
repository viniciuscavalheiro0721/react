import React, { Component } from "react";
import "./Contador.css"
import Dysplay from "./Dysplay";



export default class Contador extends Component {


    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 0,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value,
        })
    }

    render() {
        return (
            <div className="Contador">

                <div> Ola mundo</div >
                <Dysplay numero={this.state.nume}></Dysplay>
                <div>
                    <label htmlFor="passoInput"></label>
                    <input
                        id="passoInput"
                        type="number"
                        value={this.state.passo}
                        onChange={this.setPasso} />
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>

        )
    }
}