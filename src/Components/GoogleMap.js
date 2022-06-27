import { memo } from 'react'
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
// import {} from 'react-geocode'

// const bathrooms = [
//     { id: 1,
//     lat: 40.016162,
//     lng: -105.262349,
//     name: 'The Root Kava Co.'
//     },
//     { id: 2,
//     lat: 39.9929,
//     lng: -105.232530,
//     name: 'The Sioux'
//     },
//     { id: 3,
//     lat: 39.998650,
//     lng: -105.235080,
//     name: 'Safeway'
//     },
//     { id: 4,
//     lat: 40.018280,
//     lng: -105.278470,
//     name: 'Pearl Street Public Restrooms'
//     }
// ]

const GoogleMap = ({setSelectedBathroom, setBathroomModalIsOpen, google, bathrooms}) => {

    const onMarkerClick = (bathroom) => {
        console.log(bathroom)
        setSelectedBathroom(bathroom)
        setBathroomModalIsOpen(true)
    }

    const markBathrooms = (bathrooms) => {
        return bathrooms.map(bathroom => 
            <Marker 
                name={bathroom.name}
                position={{lat: bathroom.lat, lng: bathroom.lng}}
                onClick={() => onMarkerClick(bathroom)}
            />
        )
    }
    console.log('render GoogleMap');
    return (
        <Map
            google={google}
            zoom={12}
            initialCenter={{
                lat: 39.992900,
                lng: -105.232530
            }}
            style={{width: '100%', height: '100%', position: 'relative'}}
        >
            {/* {markBathrooms(bathrooms)} */}
        </Map>
    )
}

export default memo(GoogleApiWrapper({
    apiKey: "AIzaSyDoFWLUTF8Xiv_-tg2iRu3HsVvD_suTP94"
  })(GoogleMap))