import React, { PureComponent } from 'react'
import Row from './Row'

export default class Table extends PureComponent {

    constructor(){
        super()
        this.state={
            numberOfRows:0,
            numberOfCollumns:0,
            colourPicked:'white'
        }
    }

    addRow = () => {
        if(this.state.numberOfRows<8){
        this.setState({
            numberOfRows: this.state.numberOfRows + 1
        })}
    }

    removeRow = () => {
        this.setState({
            numberOfRows: this.state.numberOfRows - 1
        })
    }

    addColumn = () => {
        this.setState({
            numberOfCollumns: this.state.numberOfCollumns + 1
        })
    }

    removeColumn = () => {
        this.setState({
            numberOfCollumns: this.state.numberOfCollumns - 1
        })
    }

    pickColour = (e) => {
        this.setState({
            colourPicked:e.target.value
        })
    }

    setColour = (e) => {
        e.target.style.backgroundColor = this.state.colourPicked;
    }

    render() {
        let numRows = []

        for(let i = 0; i<=this.state.numberOfRows; i++){
            numRows.push(
                <Row 
                numberOfCollumns={this.state.numberOfCollumns}
                colourPicked = {this.state.colourPicked}
                setColour = {this.setColour}
                />
            )
        }
        return (
            <>
                <div className="buttons">
                    <button id="button" onClick={this.addRow}>
                        add a row
                    </button>
                    <button id="button"  onClick={this.addColumn}>
                        add a collumn
                    </button>
                    <button id="button" onClick={this.removeRow}>
                        remove a row
                    </button>
                    <button id="button" onClick={this.removeColumn}>
                        remove a collumn
                    </button>
                </div>

                <div>
                    <p></p>
                    <select className="colour-selector"  onChange={this.pickColour}>
                        <option value="white">white</option>
                        <option value="red">red</option>
                        <option value="blue">blue</option>
                        <option value="green">green</option>
                        <option value="black">black</option>
                    </select>
                </div>
                <p></p>
                <div className="table">
                <table>
                    {numRows}
                </table>      
                </div>      
            </>
          );
    }
}
