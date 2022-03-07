import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Menu from './Modal/images/menu.svg';

const Container = styled.div`
  padding: 0rem 0;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  background-color: white;
  border-bottom: 1px solid lightgray;
 
`;

const Wrapper = styled.div`

  max-width: 90rem;
  margin: 0 auto;
  padding: 0 1.55rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width:200px;
  margin-left:50px;
  margin-right:200px;
`;

// const SearchContainer = styled.div`
//   display: flex;
//   align-items: center;
//   border: 1px solid lightgray;
//   padding: 0.1rem;
//   margin-left:10px;
//   margin-top:-3px;
// `;


const Center = styled.div`
  flex: 2;
  display: flex;
  text-align: center;
 
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 2.25rem;
  line-height: 2.5rem;
  text-transform: uppercase;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 1rem;
  display: flex;
  cursor: pointer;
  text-transform: uppercase;
  margin-left: 15px;
  margin-right:2px;
  margin-top:3px;
`;

const Image = styled.img`
  width:25px;
  height:25px
`;

const MenuItems = styled.h3`
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  margin-left: 16px;
  margin-right:2px;
`;
const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)
  let user = useSelector((state) => state.user.currentUser);

  const signOut = () => {
    localStorage.removeItem('persist:root')
    window.location.reload(false);
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo>ECOM..</Logo>
          </Link>
        </Left>

        <Center>
          <MenuItems>MEN</MenuItems>
          <MenuItems>WOMAN</MenuItems>
          <MenuItems>CHILDREN</MenuItems>
          <MenuItems>NEW ARRIVALS</MenuItems>
          <MenuItems>CLEARANCE</MenuItems>
        </Center>

        <Right>
          {
            user ? (
              <>
              <MenuItem onClick={() => signOut()}><b>Sign out</b></MenuItem>
              <Link to="/success"> <MenuItem><b>Orders</b></MenuItem></Link>
              </>
            ) : (
              <>
                <Link to="/login"> <MenuItem><b>Login</b></MenuItem></Link>
                <Link to="/register"><MenuItem><b>Register</b></MenuItem></Link>
              </>
            )
          }


          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </Link>
          </MenuItem>

        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
