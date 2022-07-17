import { memo, useState } from 'react'
import { SwipeableDrawer } from '@mui/material';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import BathroomModeButtons from './BathroomModeButtons';
import CreateBathroom from './CreateBathroom';

const GoogleMapComponent = ({selectedBathroom, setSelectedBathroom, setBathroomDrawerIsOpen, google, setBathrooms, bathrooms}) => {

    const [createBathroomDrawerIsOpen, setCreateBathroomDrawerIsOpen] = useState(false)
    const [addBathroomMode, setAddBathroomMode] = useState(false)
    const [latitudeAndLongitudeOnDragend, setLatitudeAndLongitudeOnDragend] = useState({lat: null, lng: null})

    const [existingBathroomIcon] = useState({
        url: "images/vector2.svg",
        scaledSize: new google.maps.Size(60,60)
    })
    const [newBathroomIcon] = useState({
        url: "images/vector1.svg",
        scaledSize: new google.maps.Size(80,80),
        anchor: new google.maps.Point(42,80)
    })

    const onMarkerClick = (bathroom) => {
        console.log(bathroom)
        setSelectedBathroom(bathroom)
        setAddBathroomMode(false)
        setBathroomDrawerIsOpen(true)
    }

    const markExistingBathrooms = (bathrooms) => {
        console.log('bathrooms:', bathrooms);
        return bathrooms.map(bathroom => 
            <Marker
                position={bathroom.position}
                onClick={() => onMarkerClick(bathroom)}
                icon={existingBathroomIcon}
            />
        )
    }

    const mapDragHandler = (arg1, arg2, clickEvent) => {
        setLatitudeAndLongitudeOnDragend({lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng()})
        console.log('latAndLng', latitudeAndLongitudeOnDragend)
    }

    //these values will become dynamic with user entering their starting position
    let lat = 40.017702139029275
    let lng = -105.27544359055305
    const mapFrameCenter = {
        lat,
        lng,
    }

    console.log('render:', latitudeAndLongitudeOnDragend)

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
                        icon={newBathroomIcon}
                    />
                }
                
            </Map>
            <SwipeableDrawer
                anchor='left'
                onOpen={() => {}}
                onClose={() => setCreateBathroomDrawerIsOpen(false)}
                open={createBathroomDrawerIsOpen}
                PaperProps={{
                    style:{maxWidth: '70%', maxHeight: '100%'}
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
            <BathroomModeButtons 
                addBathroomMode={addBathroomMode}
                setAddBathroomMode={setAddBathroomMode}
                setCreateBathroomDrawerIsOpen={setCreateBathroomDrawerIsOpen}
            />
        </div>
    )
}

export default memo(GoogleApiWrapper({
    apiKey: "AIzaSyDoFWLUTF8Xiv_-tg2iRu3HsVvD_suTP94",
  })(GoogleMapComponent))