import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components"
import Button from "../components/UI/Button";

const isActiveLink = ({isActive}) => ({color: isActive ? "black":'white'})

const Layout  = ()=> {
    const navigate = useNavigate()

    const goback = () => navigate(-1)
    return(
    <Conteinar>
        <Header>
         <Logo>LOGO</Logo>
         <NavBar>
          <NavLink to="/products" style={({isActive}) => ({color: isActive ? "black":'white'})}>Products</NavLink>
          <NavLink to="/mycart" style={isActiveLink}>MyCart</NavLink>
          <NavLink to="/myorders" style={isActiveLink}>MyOrders</NavLink>                             
         </NavBar>

        </Header>
        <Main>
            <div>
              <Outlet/>

            </div>
            <Button onClick={goback}>Go Back</Button>
        </Main>
    </Conteinar>
    )
}

export default Layout

const Conteinar = styled.div`
   height: 100vh;
   width: 100%;
   background-color: #b6b3b3;
`
const Logo = styled.p`
  font-size: 1.6rem;
  font-weight: bolder;
  font-family:  Verdana, sans-serif;
  color: #ffffff;
  padding: 0;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: blue;
    color: white;
    font-size: 1.4rem;
    padding: 0px 50px;
    font-weight: bold;     
`
const NavBar = styled.div`
    a {
        width: 500px;
        text-decoration:none;
        font-size: 1.4rem;
        margin-right: 40px;
    }
    
`
const Main = styled.main`
    width: 600px;
    min-height: 200px;
    margin: 30px auto;
    padding: 20px;
`
