import React from 'react'
import styled from 'styled-components'

const MyCart = () => {
  return (
    <Card> 
        <Title>My cart bla bla bla bla</Title>
    </Card>
  )
}

export default MyCart

const Card = styled.main`
    width: 500px;
    height: 100px;
    background-color: #ffffff;
    padding: 20px 60px;
    margin-bottom: 20px;
`
const Title = styled.p`
  font-size: 1.2rem;
  font-weight: bolder;
  font-family:  Verdana, sans-serif;
  color: #3a3434;
`