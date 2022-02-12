import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

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
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Language = styled.span`
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  padding: 0.25rem;
  margin-left:5px;
`;

const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
}
`;


const Center = styled.div`
  flex: 1;
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
  cursor: pointer;
  text-transform: uppercase;
  margin-left: 15px;
  margin-right:2px;
  margin-top:3px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language><b>EN</b></Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>ECOM.</Logo>
        </Center>
        <Right>
          <MenuItem><b>REGISTER</b> </MenuItem> <PersonIcon />
          <MenuItem><b>SIGN IN</b></MenuItem><PersonOutlineIcon />
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
