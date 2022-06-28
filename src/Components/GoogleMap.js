import { memo, useState } from 'react'
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import BathroomModeButton from './BathroomModeButton';
// import {} from 'react-geocode'

// const mockBathrooms = [
//     { id: 1,
//     latitude: 40.016162,
//     longitude: -105.262349,
//     name: 'The Root Kava Co.'
//     },
//     { id: 2,
//     latitude: 39.9929,
//     longitude: -105.232530,
//     name: 'The Sioux'
//     },
//     { id: 3,
//     latitude: 39.998650,
//     longitude: -105.235080,
//     name: 'Safeway'
//     },
//     { id: 4,
//     latitude: 40.018280,
//     longitude: -105.278470,
//     name: 'Pearl Street Public Restrooms'
//     }
// ]

const GoogleMap = ({setSelectedBathroom, setBathroomDrawerIsOpen, google, bathrooms}) => {

    const [addBathroomMode, setAddBathroomMode] = useState(false)

    const onMarkerClick = (bathroom) => {
        console.log(bathroom)
        setSelectedBathroom(bathroom)
        setBathroomDrawerIsOpen(true)
    }

    const markBathrooms = (bathrooms) => {
        return bathrooms.map(bathroom => 
            <Marker 
                name={bathroom.name}
                position={{lat: bathroom.latitude, lng: bathroom.longitude}}
                //other info too
                onClick={() => onMarkerClick(bathroom)}
            />
        )
    }
    
    console.log('render GoogleMap');

    return (
        <div>
            <Map
                google={google}
                zoom={12}
                initialCenter={{
                    lat: 39.992900,
                    lng: -105.232530
                }}
                style={{width: '100%', height: '100%', position: 'relative'}}
            >
                {markBathrooms(bathrooms)}
            </Map>
            <BathroomModeButton 
                addBathroomMode={addBathroomMode}
                setAddBathroomMode={setAddBathroomMode}
            />
        </div>
    )
}

export default memo(GoogleApiWrapper({
    apiKey: "AIzaSyDoFWLUTF8Xiv_-tg2iRu3HsVvD_suTP94"
  })(GoogleMap))