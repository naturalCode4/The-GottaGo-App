import axios from 'axios'

const getBathrooms = () => {
   return new Promise ((resolve, reject) => {
      axios.get('http://localhost:4147/getbathrooms')
      .then(res => {
         console.log('getbathrooms data:', res.data[0])
         resolve(res.data[0])
      })
      .catch(error => console.log(error))
   })
}



// const getBathrooms2 = () => {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          const data = [1,2,3]
//          resolve(data);
//       }, 1000)
//    })
// }

// const data = await getBathrooms2();
// console.log(data);

const postReviewAndUpdateBathroom = async (newReview) => {
   axios.post('http://localhost:4147/postreviewandupdatebathroom', newReview)
   .then(res => console.log(res))
   .catch(error => console.log(error))
}

const getBathroomInfo = async (bathroom_id) => {
   axios.get(`http://localhost:4147/getbathroominfo/:${bathroom_id}`)
   .then(res => console.log(res))
   .catch(error => console.log(error))
}

export {getBathrooms, postReviewAndUpdateBathroom, getBathroomInfo}