import React from 'react'
import styled from 'styled-components'

const InfoText = styled.div`
  padding-left: 10px;
  text-align: center;
`;

const StyledType = styled.p`
  text-transform: capitalize;
`;

const Character = ({ designation, classification, lifeSpan }) => {
    return (
        <InfoText>
            <StyledType>Designation: {designation}</StyledType>
            <StyledType>Classification: {classification}</StyledType>
            <StyledType>Life Span: {lifeSpan} years</StyledType>
        </InfoText>
    )
}

export default Character
