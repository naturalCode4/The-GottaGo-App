const BathroomModeButton = ({addBathroomMode, setAddBathroomMode}) => {
    return (
        <button 
            onClick={() => {
                console.log('add bathroom mode')
                !addBathroomMode ? setAddBathroomMode(true) : setAddBathroomMode(false)
        }}
        >Add a Bathroom</button>
    )
}

export default BathroomModeButton