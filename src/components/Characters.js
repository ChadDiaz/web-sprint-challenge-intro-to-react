import React from 'react'
import styled from 'styled-components'
import Character from './Character'
import Films from './Films'
import Name from './Name'


const CharacterContainer = styled.div`
  display: flex;
  flex-wrap: wrap
  flex-direction: column;
  background-color: white;
  border-radius: 3px;
  justify-content: center;
  width: 29%;
  margin: 15px 17px 10px 1px;
`;

const MoveItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Characters = ({person}) => {
    
    return (
        <CharacterContainer>
            <MoveItems>
                <Name name={person.name} />
                <Character 
                    designation={person.designation}
                    classification={person.classification}
                    lifeSpan={person.average_lifespan}/>
                <Films numFilms={person.films} name={person.name}/>
            </MoveItems>            
        </CharacterContainer>
    )
}

export default Characters
