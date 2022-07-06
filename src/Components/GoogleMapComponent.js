import { memo, useState } from 'react'
import { SwipeableDrawer } from '@mui/material';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import BathroomModeButton from './BathroomModeButton';
import CreateBathroom from './CreateBathroom';

const GoogleMapComponent = ({selectedBathroom, setSelectedBathroom, setBathroomDrawerIsOpen, google, setBathrooms, bathrooms}) => {

    const [createBathroomDrawerIsOpen, setCreateBathroomDrawerIsOpen] = useState(false)
    const [addBathroomMode, setAddBathroomMode] = useState(false)
    const [latitudeAndLongitudeOnDragend, setlatitudeAndLongitudeOnDragend] = useState({lat: null, lng: null})

    const onMarkerClick = (bathroom) => {
        console.log(bathroom)
        setSelectedBathroom(bathroom)
        setBathroomDrawerIsOpen(true)
    }

    const markExistingBathrooms = (bathrooms) => {
        console.log('bathrooms:', bathrooms);
        return bathrooms.map(bathroom => 
            <Marker
                position={bathroom.position}
                onClick={() => onMarkerClick(bathroom)}
            />
        )
    }

    const mapDragHandler = (arg1, arg2, clickEvent) => {
        setlatitudeAndLongitudeOnDragend({lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng()})
    }

    //these values will become dynamic with user entering their starting position
    let lat = 40.017702139029275
    let lng = -105.27544359055305
    const mapFrameCenter = {
        lat,
        lng,
    }

    console.log('render:', latitudeAndLongitudeOnDragend)

    // const style = {height: "80%"}

    return (
        <div>
            <Map
                google={google}
                zoom={14}
                initialCenter={{
                    lat: mapFrameCenter.lat,
                    lng: mapFrameCenter.lng
                }}
            >
                {markExistingBathrooms(bathrooms)}
                {addBathroomMode &&
                    <Marker
                        // position={{  lat: mapFrameCenter.lat, lng: mapFrameCenter.lng }}
                        draggable={true} 
                        onDragend={mapDragHandler}
                        onClick={() => setCreateBathroomDrawerIsOpen(true)}
                        icon={"http://maps.google.com/mapfiles/ms/icons/blue.png"}
                        // but actually if the position could be static and you move the map that would be epic
                    />
                }
                
            </Map>
            <SwipeableDrawer
                anchor='bottom'
                onOpen={() => {}}
                onClose={() => setCreateBathroomDrawerIsOpen(false)}
                open={createBathroomDrawerIsOpen}
                PaperProps={{
                    style:{maxWidth: '100%', maxHeight: '60%'}
                }}
            >
                <CreateBathroom
                    setBathrooms={setBathrooms}
                    bathrooms={bathrooms}
                    setCreateBathroomDrawerIsOpen={setCreateBathroomDrawerIsOpen}
                    latitudeAndLongitudeOnDragend={latitudeAndLongitudeOnDragend}
                    setAddBathroomMode={setAddBathroomMode}
                    selectedBathroom={selectedBathroom}
                    setSelectedBathroom={setSelectedBathroom}
                />
            </SwipeableDrawer>
            <BathroomModeButton 
                addBathroomMode={addBathroomMode}
                setAddBathroomMode={setAddBathroomMode}
            />
        </div>
    )
}

export default memo(GoogleApiWrapper({
    apiKey: "AIzaSyDoFWLUTF8Xiv_-tg2iRu3HsVvD_suTP94",
  })(GoogleMapComponent))