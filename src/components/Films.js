import React from 'react'
import styled from 'styled-components'

const CharacterEmphasis = styled.span`
  font-size: .90rem;
  text-transform: capitalize;
  text-align: center;
`;

const StyledH1 = styled.h1`
  margin: 3px 2px 3px 6px;
  padding: 2px 2px;
  border-top: 3px solid black;
  width: 96%;
  
`;


const Films = ({numFilms , name}) => {
    return (
        <StyledH1>
           <CharacterEmphasis># of Films {name} Appeared: {numFilms.length} </CharacterEmphasis> 
        </StyledH1>
    )
}

export default Films
