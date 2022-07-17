import { useState } from 'react'

const BathroomModeButtons = ({addBathroomMode, setAddBathroomMode, setCreateBathroomDrawerIsOpen}) => {

    console.log('addBathroomMode', addBathroomMode)

    return (
        <div>
            <button id='bathroom_mode_button'
                onClick={() => {!addBathroomMode ? setAddBathroomMode(true) : setAddBathroomMode(false)}}
            >{addBathroomMode ? '-' : '+'}</button>
            {addBathroomMode && <button id='place_new_bathroom_button'
                onClick={() => {
                    setCreateBathroomDrawerIsOpen(true)
                }}
            >Place the Bathroom
                </button>}
        </div>
    )
}

export default BathroomModeButtons