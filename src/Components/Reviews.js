import axios from "axios"
import { useState, useEffect } from "react"

const Reviews = ({selectedBathroom}) => {

    const {id, bathroom_name} = selectedBathroom

    const [reviews, setReviews] = useState([{overall: 4, text_review: 'poop'}, {overall: 5, text_review: 'pee'}, {overall: 3, text_review: 'semen'}])

    const getAllReviewsForOneBathroom = async (id) => {
        axios.get(`http://localhost:4147/getallreviewsforonebathroom/${id}`)
        .then(res => {
            console.log('resssss', res.data[0])
            setReviews(res.data[0])
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getAllReviewsForOneBathroom(id)
    }, [])

    return (
        <div className="review">
            <h2>Reviews for "{bathroom_name}"</h2>
            {reviews.map(review => {
                return (
                    <div>
                        <h3>{review.overall} Stars</h3>
                        <p>{review.text_review}</p>
                        <br></br>
                    </div>
                )
            })}
        </div>
    )
}

export default Reviews