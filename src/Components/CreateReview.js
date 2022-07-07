import { useState, useEffect } from 'react'

const {postReviewAndUpdateBathroom} = require('../APIRequests/APIRequests')

const CreateReview = ({setReviewDrawerIsOpen, selectedBathroom, setSelectedBathroom, setBathrooms, bathrooms}) => {

    const [overallRating, setOverallRating] = useState(null)
    const [cleanlinessRating, setCleanlinessRating] = useState(null)
    const [crowdednessRating, setCrowdednessRating] = useState(null)
    const [type, setType] = useState(null)
    const [textReview, setTextReview] = useState(null)

    const [reviewSubmission, setReviewSubmission] = useState({})
    const [textPlaceholder, setTextPlaceholder] = useState('')
    
    const newReview = {
        overallRating,
        cleanlinessRating,
        crowdednessRating,
        type,
        textReview,
        bathroom_id: selectedBathroom.id,
    }

    // const postReviewAndUpdateBathroom = async (newReview) => {
    //     axios.post('http://localhost:4147/postreviewandupdatebathroom', newReview)
    //     // const res = await axios.pos..... is quivolent to .then(res ......)
    //     .then(res => setSelectedBathroom(res))
    //     .catch(error => console.log(error))
    // }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setReviewSubmission(newReview)
        setReviewDrawerIsOpen(false)
        console.log('newReview', newReview)
        const updatedBathroom = await postReviewAndUpdateBathroom(newReview)
        const formattedBathroom = {...updatedBathroom, position: { lat: updatedBathroom.latitude, lng: updatedBathroom.longitude }}
        console.log('formattedBathroom', formattedBathroom)
        bathrooms[bathrooms.indexOf(selectedBathroom)] = formattedBathroom
        setSelectedBathroom(formattedBathroom)
        setBathrooms([...bathrooms])
    }

    const generateReviewPlaceholder = () => {
        const placeholders=["How's the bathroom?", 'PLEASE Tell us about your experience', 'Write your review here', 'What say you?','Is this throne fit for a queen?', 'Please tell the world about this bathroom','Hows the bathroom treating you?', 'Is it smelly?','The people need to hear your expertise', "How's the John?", 'My notes...']
        const randomIndex = Math.floor(Math.random()*10)
        return placeholders[randomIndex]
    }

    useEffect(() => {
        setTextPlaceholder(generateReviewPlaceholder)
    }, [])

    return (
        <form onSubmit={handleSubmit} className="review">
            <h2>Write Your Review</h2>
            <br></br>
            <h3>Rate this bathroom overall</h3>
            <fieldset>

                <input type='radio' name='overall-rating' value='1'
                    onChange={e=>setOverallRating(e.target.value)}>
                </input>
                <label for='1'>1 Star: If you GottaGo, you GottaGo...</label>
                <br></br>

                <input type='radio' name='overall-rating' value='2'
                    onChange={e=>setOverallRating(e.target.value)}>
                </input>
                <label for='2'>2 Star: Kinda crap</label>
                <br></br>

                <input type='radio' name='overall-rating' value='3'
                    onChange={e=>setOverallRating(e.target.value)}>
                </input>
                <label  for='3'>3 Star: Decent poop throne</label>
                <br></br>

                <input type='radio' name='overall-rating' value='4'
                    onChange={e=>setOverallRating(e.target.value)}>
                </input>
                <label for='4'>4 Star: Rather nice</label>
                <br></br>

                <input type='radio' name='overall-rating' value='5'
                    onChange={e=>setOverallRating(e.target.value)}>
                </input>
                <label for='5'>5 Star: Exquisite!</label>

            </fieldset>
            <br></br><br></br>

            <h3>Cleanliness</h3>
            <fieldset>

                <input type='radio' name='cleanliness-rating' value='1'
                    onChange={e=>setCleanlinessRating(e.target.value)}>
                </input>
                <label for='1'>1 Star</label>
                <br></br>

                <input type='radio' name='cleanliness-rating' value='2'
                    onChange={e=>setCleanlinessRating(e.target.value)}>
                </input>
                <label for='2'>2 Star</label>
                <br></br>

                <input type='radio' name='cleanliness-rating' value='3'
                    onChange={e=>setCleanlinessRating(e.target.value)}>
                </input>
                <label for='3'>3 Star</label>
                <br></br>

                <input type='radio' name='cleanliness-rating' value='4'
                    onChange={e=>setCleanlinessRating(e.target.value)}>
                </input>
                <label for='4'>4 Star</label>
                <br></br>

                <input type='radio' name='cleanliness-rating' value='5'
                    onChange={e=>setCleanlinessRating(e.target.value)}>
                </input>
                <label for='5'>5 Star</label>
            
            </fieldset>
            <br></br><br></br>

            <h3>Crowdedness</h3>
            <fieldset>

                <input type='radio' name='crowdedness-rating' value='1'
                    onChange={e=>setCrowdednessRating(e.target.value)}>
                </input>
                <label for='lots'>Lots of people</label>
                <br></br>

                <input type='radio' name='crowdedness-rating' value='3'
                    onChange={e=>setCrowdednessRating(e.target.value)}>
                </input>
                <label for='few'>Just a few people</label>
                <br></br>

                <input type='radio' name='crowdedness-rating' value='5'
                    onChange={e=>setCrowdednessRating(e.target.value)}>
                </input>
                <label for='private'>Private</label>
                <br></br>

            </fieldset>
            <br></br><br></br>

            <h3>What type of bathroom is this?</h3>
            <fieldset>

            <input type='radio' name='type' value='Porta-Potty'
                    onChange={e=>setType(e.target.value)}>
                </input>
                <label for='porta-potty'>Porta-Potty</label>
                <br></br>

                <input type='radio' name='type' value='Public Restroom'
                    onChange={e=>setType(e.target.value)}>
                    </input>
                <label for='public-restroom'>Public Restroom</label>
                <br></br>

                <input type='radio' name='type' value='Out-In-Nature'
                    onChange={e=>setType(e.target.value)}>
                </input>
                <label for='nature'>Out in nature</label>
                <br></br>

                <input type='radio' name='type' value="Private -- they let you go consistently!"
                    onChange={e=>setType(e.target.value)}>
                </input>
                <label for='consistently'>Private -- They let you go consistently {'(E.g. a supermarket, library)'}</label>
                <br></br>

                <input type='radio' name='type' value="Private -- you gotta be friendly or be a customer"
                    onChange={e=>setType(e.target.value)}>
                </input>
                <label for='probably'>Private -- They'll probably let you go if you're friendly or be a customer {'(E.g. many restaurants)'}</label>
                <br></br>

                <input type='radio' name='type' value="Private -- they let you go if you buy something or maybe if you're ready to pee your in your pants"
                    onChange={e=>setType(e.target.value)}>
                </input>
                <label for='if'>Private -- They only let you go if you buy something or are about to shit on the ground {'(E.g. car dealership, fancy restaurant, small store)'}</label>

            </fieldset>
            <br></br><br></br>

            <h3>Your Review</h3>
            <textarea 
                placeholder={textPlaceholder}
                maxLength='255'
                style={{width: '95%'}}
                onChange={e => setTextReview(e.target.value)}
            />
            <br></br><br></br><br></br>

            <input type='submit' value="Submit"/>
        </form>
    )
}

export default CreateReview

