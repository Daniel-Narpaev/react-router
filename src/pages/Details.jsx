import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/UI/Button'

const Details = ({products }) => {
  console.log(products)
   const {id} = useParams()
  return (
    <Conteinar>
    <ListItem>Products Details page<br/>{products [id -1].title}</ListItem>
    </Conteinar>
  )
}

export default Details
const Conteinar = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    height: 100px;
    margin-bottom: 20px;  
    background-color: #fdfdfd;
    padding: 30px 40px;
    list-style:none;
`
const ListItem = styled.li`
  font-size: 1.2rem;
  font-weight: bolder;
  font-family:  Verdana, sans-serif;
  color: #3a3434;
`
