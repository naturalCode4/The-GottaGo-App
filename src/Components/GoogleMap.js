import { useState } from 'react'
import {GoogleApiWrapper, Map, Marker, onMarkerClick} from 'google-maps-react';
// import {} from 'react-geocode'

const bathrooms = [
    { id: 1,
    lat: 40.016162,
    lng: -105.262349,
    name: 'The Root Kava Co.'
    },
    { id: 2,
    lat: 39.9929,
    lng: -105.232530,
    name: 'The Sioux'
    },
]

const GoogleMap = ({setSelectedBathroom, setModalIsOpen, google}) => {

    const onMarkerClick = (bathroom) => {
        console.log(bathroom)
        setSelectedBathroom(bathroom)
        setModalIsOpen(true)
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

    return (
        <Map
            google={google}
            zoom={12}
            initialCenter={{
                lat: 39.992900,
                lng: -105.232530
            }}
            style={{width: '100%', height: '90%', position: 'relative'}}
        >
            {markBathrooms(bathrooms)}
        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDoFWLUTF8Xiv_-tg2iRu3HsVvD_suTP94"
  })(GoogleMap)