const BathroomInfo = ({selectedBathroom}) => {
    
        const {
            bathroom_id: id,
            bathroom_address,
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
            <h2>{bathroom_name}</h2>
            <ul>
                <li><b>Overall Rating:</b> {Math.round(ave_overall * 100) / 100} Stars</li>
                <li><b>Cleanliness Rating:</b> {Math.round(ave_cleanliness * 100) / 100} Stars</li>
                <li><b>Privateness Rating:</b> {Math.round(ave_crowdedness * 100) / 100} Stars</li>
                <li><b>Users Most Often Describe As:</b> {top_category}</li>
                <li><b>Address:</b> {bathroom_address ? bathroom_address : 'No one has added it yet'}</li>
            </ul>
        </div>
    )
}

export default BathroomInfo