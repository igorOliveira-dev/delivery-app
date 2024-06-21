import React from 'react'
import styled, { keyframes } from 'styled-components'

import loadingPenguin from '/logoPNG.png'

const Container = styled.div `
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    `
const rotate = keyframes`
  to {
    transform: rotate(360deg);
}
`
const Penguin = styled.img `
    height: 50px;
    width: 50px;
    animation: ${rotate} 1s ease-out infinite;
`

const Loading = () => {

  return (
    <Container>
        <Penguin src={loadingPenguin} />
    </Container>
  )
}

export default Loading
