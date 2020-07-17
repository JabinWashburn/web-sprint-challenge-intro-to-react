// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
border: 2px solid black;
max-width: 15%;
display: flex;
flex-direction: column;
margin: 3% 0% 0% 42.3%;
background-color: #ffefd5;
border-radius: 15px;
font-family: fantasy;
`



const Character = props => {
    return(
        <Box>
            <p>Name: {props.name}</p>
            <p>Birth: {props.birth}</p>
            <p>Mass: {props.mass}</p>
        </Box>
    )
}

export default Character