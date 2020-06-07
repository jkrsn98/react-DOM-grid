import React from 'react'
import Cell from './Cell'

export default function Row(props) {
    let cells = []

    for(let i = 0; i<=props.numberOfCollumns; i++){
        cells.push(
            <Cell 
            colourPicked = {props.colourPicked}
            setColour = {props.setColour}
            />
        )
    }

    return (
        <tr>
            {cells}
        </tr>

    )
}

