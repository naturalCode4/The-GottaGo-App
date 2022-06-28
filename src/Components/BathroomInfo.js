import axios from 'axios'

const BathroomInfo = ({selectedBathroom}) => { //this prop not passed in yet
    
        const {
            bathroom_id: id,
            latitude,
            longitude,
            bathroom_name,
            ave_overall,
            ave_cleanliness,
            ave_crowdedness,
            top_category,
            poster_id,
        } = selectedBathroom

    // const getBathroomInfo = async (bathroom_id) => {
    //     axios.get(`http://localhost:4147/getbathroominfo/:${bathroom_id}`)
    //     .then(res => console.log(res))
    //     .catch(error => console.log(error))
    // }

    // getBathroomInfo(selectedBathroom.id)
    
    return (
        <div>
            <h2>{selectedBathroom.name}</h2>
            <img src='http://placekitten.com/200/300' alt='no kitty available'/>
            <ul>
                <li><b>Name:</b> {bathroom_name}</li>
                <li><b>Overall Rating:</b> {ave_overall} Stars</li>
                <li><b>Cleanliness Rating:</b> {ave_cleanliness} Stars</li>
                <li><b>Privateness Rating:</b> {ave_crowdedness} Stars</li>
                <li><b>Type:</b> {top_category}</li>
                {/* <li><b>Address:</b> {address ? address : 'no address available. see map marker'}</li> */}
            </ul>
        </div>
    )
}

export default BathroomInfo