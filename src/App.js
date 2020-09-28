import React, { useEffect , useState } from 'react';
import './App.css';
import axios from 'axios'
import styled from 'styled-components'
import Characters from './components/Characters';
import Title from './components/Title';


const CharacterCard = styled.div`
  display: flex;
  
  flex-wrap: wrap;
  justify-content: center;
  text-transform: capitalize;
  font-family: "Courier New";
  width: 100%;
`;

const App = () => {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/species/")
    .then(response => {
      return setSpecies(response.data.results)
    }).catch(err => console.log("Error" , err))
  }, [])
  
  return (
    <CharacterCard>
      <Title  />
         
      {species.map((character , index) => {
        return  <Characters key={index} person={character} />
      })}
    </CharacterCard>
  );
}

export default App;
