import React from 'react'
import styled from 'styled-components'

const Films = ({numFilms , name}) => {
    return (
        <div>
           <h3>Number of Films {name} Appeared: {numFilms.length} </h3> 
        </div>
    )
}

export default Films
