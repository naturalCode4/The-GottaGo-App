import { useState } from 'react'

const BathroomModeButton = ({addBathroomMode, setAddBathroomMode}) => {

    console.log('addBathroomMode', addBathroomMode)

    return (
        <button id='bathroom_mode_button'
            onClick={() => {!addBathroomMode ? setAddBathroomMode(true) : setAddBathroomMode(false)}}
        >{addBathroomMode ? '-' : '+'}</button>
    )
}

export default BathroomModeButton