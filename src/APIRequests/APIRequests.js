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

// Might actually be in use! vvv
// const updateNewlyReviewedBathroom = async (bathroom_id) => {
//    axios.get(`http://localhost:4147/updatenewlyreviewedbathroom/${bathroom_id}`)
//    .then(res => console.log(res))
//    .catch(error => console.log(error))
// }

const postNewBathroomData = async (newBathroomData) => {
   return axios.post(`http://localhost:4147/postnewbathroomdata`, newBathroomData)
}

//for just posting review data (without other functions)
const postReviewData = async (reviewDataForNewBathroom) => {
   axios.post(`http://localhost:4147/postreviewdatafornewbathroom`, reviewDataForNewBathroom)
   .then(res => console.log(res))
   .catch(error => console.log(error))
}

// const getBathroomInfo = async (bathroom_id) => {
//    axios.get(`http://localhost:4147/getbathroominfo/:${bathroom_id}`)
//    .then(res => console.log(res))
//    .catch(error => console.log(error))
// }

export {postReviewAndUpdateBathroom, postNewBathroomData, postReviewData}