import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/UI/Button";
import Details from "./Details";

const Products = ({ products }) => {
  return (
    <UlList>
      {products.map((item) => {
        return (
            <Conteinar>
            <ListItem>{item.title}</ListItem>
             <Link to={`/products/${item.id}/details`}>
               <Button>Details</Button>
             </Link>   
            </Conteinar>
        );
      })}
    </UlList>
  );
};

export default Products;

const UlList = styled.ul`
    list-style: none;
    width: 600px;
    /* display: flex;
    justify-content: space-between;
    align-items: center; 
    height: 70px;
    margin-bottom: 20px;  
    background-color: #fdfdfd;
    padding: 0px 40px; */
`;
const Conteinar = styled.div`
    width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    height: 70px;
    margin-bottom: 20px;  
    background-color: #fdfdfd;
    padding: 0px 40px;
`
const ListItem = styled.li`
  font-size: 1.2rem;
  font-weight: bolder;
  font-family:  Verdana, sans-serif;
  color: #3a3434;
`
