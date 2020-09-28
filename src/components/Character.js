import React from 'react'
import styled from 'styled-components'

const Character = ({ designation, classification, lifeSpan }) => {
    return (
        <div>
            <p>Designation: {designation}</p>
            <p>Classification: {classification}</p>
            <p>Life Span: {lifeSpan} years</p>
        </div>
    )
}

export default Character
