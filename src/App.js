import React, { useEffect , useState } from 'react';
import './App.css';
import axios from 'axios'
import styled from 'styled-components'
import Characters from './components/Characters';


const App = () => {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/species/")
    .then(response => {
      return setSpecies(response.data.results)
    }).catch(err => console.log("Error" , err))
  }, [])
  
  return (
    <div className="App">
      <h1 className="Header">Species List from The Star Wars Movies</h1>
      {species.map((character , index) => {
        return  <Characters key={index} person={character} />
      })}
    </div>
  );
}

export default App;
