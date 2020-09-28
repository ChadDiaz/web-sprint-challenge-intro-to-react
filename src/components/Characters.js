import React from 'react'
import styled from 'styled-components'
import Character from './Character'
import Films from './Films'
import Name from './Name'

const Characters = ({person}) => {
    
    return (
        <div>
            <Name name={person.name} />
            <Character 
                designation={person.designation}
                classification={person.classification}
                lifeSpan={person.average_lifespan}/>
            <Films numFilms={person.films} />
        </div>
    )
}

export default Characters
