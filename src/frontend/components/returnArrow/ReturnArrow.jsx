import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button `
        color: #fdfdfd;
        background-color: transparent;
        height: 40px;
        width: 40px;
        border-color: #fdfdfd53;
        border-radius: 50%;
        position: absolute;
        top: 30px;
        left: 30px;
        padding: 10px;
    `

const ReturnArrow = () => {

    const navigate = useNavigate();
    const returnToInit = () => {
        navigate("/")
    }

  return (
    <Button onClick={returnToInit}>
        {"<"}
    </Button>
  )
}

export default ReturnArrow
