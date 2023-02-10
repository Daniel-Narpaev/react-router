import React from 'react'
import styled from 'styled-components'

const Button = ({ children, onClick }) => {
  return (
    <GoBackBtn onClick={onClick}>{children}</GoBackBtn>
  )
}

export default Button

const GoBackBtn = styled.button`
  border-radius: 20px;
  padding: 10px 30px;
  border: none;
  background-color: #19a78f;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  margin-left: 40px;
`