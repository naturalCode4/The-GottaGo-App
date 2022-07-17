import { SwipeableDrawer } from '@mui/material'
// import { minHeight, maxWidth } from '@mui/system'
import { useState } from 'react'
import BathroomInfo from './BathroomInfo'
import CreateReview from './CreateReview'
import Reviews from './Reviews'

const Bathroom = ({selectedBathroom, setSelectedBathroom, setBathroomDrawerIsOpen, bathroomDrawerIsOpen, setBathrooms, bathrooms}) => {
        
    const [reviewDrawerIsOpen, setReviewDrawerIsOpen] = useState(false)
    const [allReviewsDrawerIsOpen, setAllReviewsDrawerIsOpen] = useState(false)

    console.log('rendering Bathroom. Here is selectedBathroom:', selectedBathroom)
    
    return (
    <div>
        <SwipeableDrawer
            anchor='bottom'
            onOpen={() => {}}
            onClose={() => setBathroomDrawerIsOpen(false)}
            open={bathroomDrawerIsOpen}
            PaperProps={{
                style:{ minHeight: '40%', maxHeight: '60%' }
            }}
        >
            <div className='bathroom_info'>
                <BathroomInfo selectedBathroom={selectedBathroom}/>
                <div id="see_and_leave_reviews_buttons_container">
                    <button className="reviews_buttons"
                        onClick={() => {
                        allReviewsDrawerIsOpen===false ? setAllReviewsDrawerIsOpen(true) : setAllReviewsDrawerIsOpen(false)}}
                        >See All Reviews!
                    </button>
                    <button className="reviews_buttons"
                        onClick={() => {
                        reviewDrawerIsOpen===false ? setReviewDrawerIsOpen(true) : setReviewDrawerIsOpen(false)}}
                        >Leave a Review!
                    </button>
                </div>
            </div>
            
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
                style:{ maxWidth: '80%' }
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
        <SwipeableDrawer
            anchor='bottom'
            onOpen={() => {}}
            onClose={() => {
                setAllReviewsDrawerIsOpen(false)
            }}
            open={allReviewsDrawerIsOpen}
            PaperProps={{
                style:{minHeight: '32%', maxHeight: '60%'}
            }}
            >
            <Reviews selectedBathroom={selectedBathroom}/>
        </SwipeableDrawer>

    </div>
    )
}

export default Bathroom