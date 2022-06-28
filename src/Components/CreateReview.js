import { useState, useEffect } from 'react'

const {postReviewAndUpdateBathroom, updateNewlyReviewedBathroom} = require('../APIRequests/APIRequests')

const CreateReview = ({setReviewDrawerIsOpen, selectedBathroom, setSelectedBathroom, setBathrooms, bathrooms}) => {

    const [overallRating, setOverallRating] = useState(null)
    const [cleanlinessRating, setCleanlinessRating] = useState(null)
    const [crowdednessRating, setCrowdednessRating] = useState(null)
    const [type, setType] = useState(null)
    const [textReview, setTextReview] = useState(null)

    const newReview = {
        overallRating,
        cleanlinessRating,
        crowdednessRating,
        type,
        textReview,
        bathroom_id: selectedBathroom.id,
    }

    console.log('Rendering CreateReview Component.', 'bathroomId is ', newReview.bathroom_id)

    const [submission, setSubmission] = useState({})
    const [textPlaceholder, setTextPlaceholder] = useState('')

    // const postReviewAndUpdateBathroom = async (newReview) => {
    //     axios.post('http://localhost:4147/postreviewandupdatebathroom', newReview)
    //     // const res = await axios.pos..... is quivolent to .then(res ......)
    //     .then(res => setSelectedBathroom(res))
    //     .catch(error => console.log(error))
    // }


    //replace the selected bathrooms in the bathroomsarray with updatedbathroom
    const replaceSelectedBathroomInBathroomArrayWithUpdatedBathroom = () => {
        // index into bathrooms array at selectedBathroom
        // replace that item
        // 
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmission(newReview)
        console.log('submission: ', submission)
        // updateNewlyReviewedBathroom()
        const updatedBathroom = await postReviewAndUpdateBathroom(newReview)
        console.log('updatedBathroom', updatedBathroom) 
        setSelectedBathroom(updatedBathroom)
        replaceSelectedBathroomInBathroomArrayWithUpdatedBathroom()
        setBathrooms([...bathrooms])
        //^we want to select the current bathroom. how will we do that? 
        //This currently wont work because there might be skipped bathrooms if one is deleted
        //okay just used selected bathroom. baruch hashem. will this work? then take the bathrooms prop out
        // finally, line 33 wont work because it doesnt have the new information
        setReviewDrawerIsOpen(false)
    }

    const generateReviewPlaceholder = () => {
        const placeholders=["How's the bathroom?", 'PLEASE Tell us about your experience', 'Write a review', 'What say you?','Is this throne fit for a queen?', 'Please tell the world about this bathroom','Hows the bathroom treating you?', 'Is it smelly?','The people need to hear your expertise', "How's the john?"]
        const randomIndex = Math.floor(Math.random()*10)
        return placeholders[randomIndex]
    }

    useEffect(() => {
        setTextPlaceholder(generateReviewPlaceholder)
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <h1>REVIEW</h1>
            <br></br>
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

            <p>What type of bathroom is this?</p>
            <fieldset>

                <input type='radio' name='type' value='public-restroom'
                    onChange={e=>setType(e.target.value)}>
                    </input>
                <label for='public-restroom'>Public Restroom</label>
                <br></br>

                <input type='radio' name='type' value='porta-potty'
                    onChange={e=>setType(e.target.value)}>
                </input>
                <label for='porta-potty'>Porta-Potty</label>
                <br></br>

                <input type='radio' name='type' value='consistently'
                    onChange={e=>setType(e.target.value)}>
                </input>
                <label for='consistently'>They'll let you go consistently {'(E.g. a supermarket)'}</label>
                <br></br>

                <input type='radio' name='type' value='probably'
                    onChange={e=>setType(e.target.value)}>
                </input>
                <label for='probably'>They'll let you go probably if you ask nicely {'(E.g. many restaurants)'}</label>
                <br></br>

                <input type='radio' name='type' value='if'
                    onChange={e=>setType(e.target.value)}>
                </input>
                <label for='if'>They'll let you go if you buy something or look like you are about to shit on their floor {'(E.g. car dealership, fancy restaurant, small store)'}</label>
                <br></br>

                <input type='radio' name='type' value='nature'
                    onChange={e=>setType(e.target.value)}>
                </input>
                <label for='nature'>Out in nature</label>

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

export default CreateReview

