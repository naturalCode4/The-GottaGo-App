import { SwipeableDrawer } from '@mui/material'
// import { minHeight, maxWidth } from '@mui/system'
import { useState } from 'react'
import BathroomInfo from './BathroomInfo'
import CreateReview from './CreateReview'

const Bathroom = ({selectedBathroom, setBathroomModalIsOpen, bathroomModalIsOpen}) => {
        
    const [reviewModalIsOpen, setReviewModalIsOpen] = useState(false)

    return (
    <div>
        <SwipeableDrawer
            anchor='bottom'
            onOpen={() => {}}
            onClose={() => setBathroomModalIsOpen(false)}
            open={bathroomModalIsOpen}
            PaperProps={{
                style:{ minHeight: '40%' }
            }}
        >
            <BathroomInfo selectedBathroom={selectedBathroom} />

            <button onClick={() => {
                reviewModalIsOpen===false ? setReviewModalIsOpen(true) : setReviewModalIsOpen(false) }}
                >Leave a Review!
            </button>
        </SwipeableDrawer>
        <SwipeableDrawer
            anchor='left'
            onOpen={() => setBathroomModalIsOpen(false)}
            onClose={() => {
                setReviewModalIsOpen(false)
                setBathroomModalIsOpen(true)
            }}
            open={reviewModalIsOpen}
            PaperProps={{
                style:{ maxWidth: '60%' }
            }}
        >
            <CreateReview selectedBathroom={selectedBathroom}/>
        </SwipeableDrawer>

    </div>
    )
}

export default Bathroom