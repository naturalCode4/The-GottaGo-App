import './App.css';
import {useState} from 'react'
import Bathroom from './Components/Bathroom'
import GoogleMap from './Components/GoogleMap';


function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedBathroom, setSelectedBathroom] = useState(null);

  return (
    <div className="App">
        <GoogleMap
          setModalIsOpen={setModalIsOpen}
          setSelectedBathroom={setSelectedBathroom}
          />
        <Bathroom
          setModalIsOpen={setModalIsOpen}
          modalIsOpen={modalIsOpen}
          setSelectedBathroom={setSelectedBathroom}
          selectedBathroom={selectedBathroom}
        />
    </div>
  );
}

export default App;
