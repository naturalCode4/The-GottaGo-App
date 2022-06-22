import { SwipeableDrawer } from '@mui/material'
import { minHeight } from '@mui/system'
import { useState } from 'react'
import BathroomInfo from './BathroomInfo'

const Bathroom = ({setSelectedBathroom, selectedBathroom, setModalIsOpen, modalIsOpen}) => {
        
    return (
    <div>
        <SwipeableDrawer
            anchor='bottom'
            onOpen={() => {}}
            onClose={() => setModalIsOpen(false)}
            open={modalIsOpen}
            PaperProps={{
                style:{ minHeight: '40%' }
            }}
        >
            <BathroomInfo selectedBathroom={selectedBathroom} />
        </SwipeableDrawer>
    </div>
    )
}

export default Bathroom