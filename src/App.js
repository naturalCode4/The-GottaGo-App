import './App.css';
import {useState, memo, useEffect} from 'react'
import Bathroom from './Components/Bathroom'
import GoogleMap from './Components/GoogleMap';
import Header from './Components/Header';
import { getBathrooms } from './APIRequests/APIRequests';

function App() {

  const [bathroomModalIsOpen, setBathroomModalIsOpen] = useState(false)
  const [selectedBathroom, setSelectedBathroom] = useState(null);
  // const [bathrooms, setBathrooms] = useState([]);

  async useEffect(() => {
    try {
      const bathrooms = await getBathrooms()
      console.log(bathrooms)
    } catch (e) {
      console.log('There was an error ==> ', e)
    }
  }, [])
  
  console.log('render App');
  return (
    <div className="App">
        <Header/>
        <GoogleMap
          setBathroomModalIsOpen={setBathroomModalIsOpen}
          setSelectedBathroom={setSelectedBathroom}
          bathrooms={bathrooms}
          />
        <Bathroom
          setBathroomModalIsOpen={setBathroomModalIsOpen}
          bathroomModalIsOpen={bathroomModalIsOpen}
          selectedBathroom={selectedBathroom}
        />
    </div>
  );
}

export default memo(App);
