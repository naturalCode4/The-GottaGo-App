import axios from 'axios'

const postReviewAndUpdateBathroom = async (newReview) => {
   const myPromise = new Promise ((resolve, reject) => {
      axios.post('http://localhost:4147/postreviewandupdatebathroom', newReview)
         // const res = await axios.pos..... is quivolent to .then(res ......)
         .then(res => resolve(res.data[0][0]))
         .catch(error => reject(error))
   })
   return myPromise
}

const updateNewlyReviewedBathroom = async (bathroom_id) => {
   axios.get(`http://localhost:4147/updatenewlyreviewedbathroom/${bathroom_id}`)
   .then(res => console.log(res))
   .catch(error => console.log(error))
}
// const getBathroomInfo = async (bathroom_id) => {
//    axios.get(`http://localhost:4147/getbathroominfo/:${bathroom_id}`)
//    .then(res => console.log(res))
//    .catch(error => console.log(error))
// }

export {postReviewAndUpdateBathroom, updateNewlyReviewedBathroom}