import './App.css';
import {useState, memo, useEffect} from 'react'
import Bathroom from './Components/Bathroom'
import GoogleMap from './Components/GoogleMap';
import Header from './Components/Header';
import axios from 'axios'

function App() {

  const [bathroomDrawerIsOpen, setBathroomDrawerIsOpen] = useState(false)
  const [selectedBathroom, setSelectedBathroom] = useState(null);
  const [bathrooms, setBathrooms] = useState([]);

  const getBathrooms = () => {
       axios.get('http://localhost:4147/getbathrooms')
       .then(res => {
          console.log('getbathrooms data:', res.data[0])
          setBathrooms(res.data[0])
       })
       .catch(error => console.log(error))
  }
 
  useEffect(() => {
    getBathrooms()
  }, [])

  console.log('render App');
  return (
    <div className="App">
        <Header/>
        <GoogleMap
          setBathroomDrawerIsOpen={setBathroomDrawerIsOpen}
          setSelectedBathroom={setSelectedBathroom}
          bathrooms={bathrooms}
          />
        <Bathroom
          setBathroomDrawerIsOpen={setBathroomDrawerIsOpen}
          bathroomDrawerIsOpen={bathroomDrawerIsOpen}
          selectedBathroom={selectedBathroom}
          setSelectedBathroom={setSelectedBathroom}
          bathrooms={bathrooms}
          setBathrooms={setBathrooms}
        />
    </div>
  );
}

export default memo(App);
