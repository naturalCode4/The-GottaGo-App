import { SwipeableDrawer } from '@mui/material'
// import { minHeight, maxWidth } from '@mui/system'
import { useState } from 'react'
import BathroomInfo from './BathroomInfo'
import CreateReview from './CreateReview'

const Bathroom = ({selectedBathroom, setSelectedBathroom, setBathroomDrawerIsOpen, bathroomDrawerIsOpen, setBathrooms, bathrooms}) => {
        
    const [reviewDrawerIsOpen, setReviewDrawerIsOpen] = useState(false)

    return (
    <div>
        <SwipeableDrawer
            anchor='bottom'
            onOpen={() => {}}
            onClose={() => setBathroomDrawerIsOpen(false)}
            open={bathroomDrawerIsOpen}
            PaperProps={{
                style:{ minHeight: '40%' }
            }}
        >
            <BathroomInfo selectedBathroom={selectedBathroom} />

            <button onClick={() => {
                reviewDrawerIsOpen===false ? setReviewDrawerIsOpen(true) : setReviewDrawerIsOpen(false) }}
                >Leave a Review!
            </button>
        </SwipeableDrawer>
        <SwipeableDrawer
            anchor='left'
            onOpen={() => setBathroomDrawerIsOpen(false)}
            onClose={() => {
                setReviewDrawerIsOpen(false)
                setBathroomDrawerIsOpen(true)
            }}
            open={reviewDrawerIsOpen}
            PaperProps={{
                style:{ maxWidth: '60%' }
            }}
        >
            <CreateReview 
                selectedBathroom={selectedBathroom}
                setSelectedBathroom={setSelectedBathroom}
                bathrooms={bathrooms}
                setReviewDrawerIsOpen={setReviewDrawerIsOpen}
                setBathrooms={setBathrooms}
            />
        </SwipeableDrawer>

    </div>
    )
}

export default Bathroom