const BathroomInfo = ({ selectedBathroom }) => { //this prop not passed in yet
    return (
        <div>
            <h2>{selectedBathroom.name}</h2>
            <ul>
                <li>more info</li>
                <li>even more info</li>
                <li>there will be yet more info</li>
            </ul>
        </div>
    )
}

export default BathroomInfo