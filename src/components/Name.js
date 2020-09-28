import React from 'react'
import styled from 'styled-components'

const CharacterEmphasis = styled.span`
  font-size: 1.5rem;
  text-transform: capitalize;
  text-align: center;
`;

const StyledH1 = styled.h1`
  margin: 5px 4px 5px 8px;
  padding: 2px 2px;
  border-bottom: 3px solid black;
  width: 96%;
  
`;

const Name = ({name}) => {
    return (
        <StyledH1>
            <CharacterEmphasis>Species: {name}</CharacterEmphasis>
        </StyledH1>
    )
}

export default Name
