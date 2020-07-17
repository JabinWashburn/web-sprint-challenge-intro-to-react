// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    
`



const Character = props => {
    return(
        <Container>
            <p>Name: {props.name}</p>
            <p>Birth: {props.birth}</p>
            <p>Mass: {props.mass}</p>
        </Container>
    )
}

export default Character