import { useState, useEffect } from 'react'
import {Map} from 'google-maps-react';
const {postNewBathroomData, postReviewData} = require('../APIRequests/APIRequests')

// const mapClickHandler = (mapProps, map, positionInfo) => {
//     console.log('mapClicked: ', positionInfo)
//     console.log(positionInfo.latLng.lat(), positionInfo.latLng.lng())
// }

const CreateBathroom = ({setBathrooms, bathrooms, setCreateBathroomDrawerIsOpen, latitudeAndLongitudeOnDragend, setAddBathroomMode, selectedBathroom, setSelectedBathroom}) => {

    const [bathroomNameText, setBathroomNameText] = useState(null)
    const [bathroomAddressText, setBathroomAddressText] = useState(null)
    const [overallRating, setOverallRating] = useState(null)
    const [cleanlinessRating, setCleanlinessRating] = useState(null)
    const [crowdednessRating, setCrowdednessRating] = useState(null)
    const [type, setType] = useState(null)
    const [textReview, setTextReview] = useState(null)
    let latitude = null
    let longitude = null

    const [bathroomSubmission, setBathroomSubmission] = useState({})
    const [textPlaceholder, setTextPlaceholder] = useState('')

    const newBathroomData = {
        latitude, 
        longitude,
        bathroomNameText,
        bathroomAddressText,
        overallRating,
        cleanlinessRating,
        crowdednessRating,
        type,
        textReview,
        // bathroom_id: selectedBathroom.id
        // ^^^^gotta tell it what id is somehow. cant use selected bathroom because thats for existing bathrooms
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setCreateBathroomDrawerIsOpen(false)
        newBathroomData.latitude = latitudeAndLongitudeOnDragend.lat
        newBathroomData.longitude = latitudeAndLongitudeOnDragend.lng
        setBathroomSubmission(newBathroomData)
        console.log('Submitting newBathroomData: ', newBathroomData)
        const returnedNewBathroom = await postNewBathroomData(newBathroomData)
        setBathrooms([...bathrooms, returnedNewBathroom.data])
        setAddBathroomMode(false)
    }

    //gotta raise this prop because its used in CreateReview too
    const generateReviewPlaceholder = () => {
        const placeholders=["How's the bathroom?", 'PLEASE Tell us about your experience', 'Write a review', 'What say you?','Is this throne fit for a queen?', 'Please tell the world about this bathroom','Hows the bathroom treating you?', 'Is it smelly?','The people need to hear your expertise', "How's the john?"]
        const randomIndex = Math.floor(Math.random()*10)
        return placeholders[randomIndex]
    }

    useEffect(() => {
        setTextPlaceholder(generateReviewPlaceholder)
    }, [])

    return (
        <form onSubmit={handleSubmit} className="review">
            <h2>Mark a bathroom, for the people!</h2>
            <br></br>

            <p>What should we call this bathroom?</p>
            <input 
                type='text' 
                style={{width: '95%'}}
                placeholder="E.g. 'Chipotle', 'Whole Foods', 'Denver Art Museum', Etc."
                onChange={e => setBathroomNameText(e.target.value)}
            ></input>

            <p>Do you have an address for this bathroom?</p>
            <textarea 
                maxLength='150'
                style={{width: '95%'}}
                placeholder="Let us know the address here"
                onChange={e => setBathroomAddressText(e.target.value)}>
            </textarea>


            <p>Rate this bathroom overall</p>
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

            <p>Cleanliness</p>
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

            <p>Crowdedness</p>
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

            <p>Which best describes this shitter?</p>

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
                <label for='consistently'>Private -- They let you go consistently {'(E.g. a supermarket)'}</label>
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

            <p>Your Review</p>
            <textarea 
                placeholder={textPlaceholder}
                maxLength='255'
                style={{width: '95%'}}
                onChange={e => setTextReview(e.target.value)}
            />
            <input type='submit' value="Submit"/>
        </form>
    )
}

export default CreateBathroom