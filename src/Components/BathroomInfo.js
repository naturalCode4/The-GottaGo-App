const {getBathroomInfo} = require('../APIRequests/APIRequests')

const BathroomInfo = ({selectedBathroom}) => { //this prop not passed in yet
    
    getBathroomInfo(selectedBathroom.id)
    
    return (
        <div>
            <h2>{selectedBathroom.name}</h2>
            <img src='http://placekitten.com/200/300' alt='no kitty available'/>
            <ul>
                <li>Rating: ______</li>
                <li>Address: ______</li>
                <li>Cleanliness: ______</li>
                <li>Crowdedness: ______</li>
                <li>Type: ______</li>
            </ul>
        </div>
    )
}

export default BathroomInfo