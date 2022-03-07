import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles.css";
import Menu from './Modal/images/user.png';
import heart from './Modal/images/heart.png';
import search from './Modal/images/search.png';


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
  justify-content: flex-center;
  gap:20px;
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
  width:18px;
  height:18px
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
  const [dropdownState, setDropdownState] = useState(false);

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };

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
          <Link to={`/products/man`}>
            <MenuItems>MEN</MenuItems>
          </Link>
          <Link to={`/products/woman`}>
            <MenuItems>WOMAN</MenuItems>
          </Link>
          <Link to={`/products/children`}>
            <MenuItems>CHILDREN</MenuItems>
          </Link>
          <Link to={`/products/new arrivals`}>
          <MenuItems>NEW ARRIVALS</MenuItems>
          </Link>
          <Link to={`/products/clearance`}>
          <MenuItems>CLEARANCE</MenuItems>
          </Link>
        </Center>

        <Right>
          {/* {
            user ? (
              <>
                <MenuItem onClick={() => signOut()}><b>Sign out</b></MenuItem>
              </>
            ) : (
              <>
                <Link to="/login"> <MenuItem><b>Login</b></MenuItem></Link>
                <Link to="/register"><MenuItem><b>Register</b></MenuItem></Link>
              </>
            )
          } */}


          <MenuItem>
            <Link to="/cart" >
              <div style={{ textAlign: 'center' }}>
                <Badge badgeContent={quantity} color="primary" style={{ marginTop: '-7px', marginBottom: '5px' }}>
                  <ShoppingCartIcon />
                </Badge>
                <div className="profile-title-2">Cart</div>
              </div>
            </Link>
          </MenuItem>

          <div className={`dropdown`}>

            <div style={{ textAlign: 'center' }} onClick={handleDropdownClick}>
              <Image src={Menu} alt="" className="dropdown-btn" />
              <div className="profile-title">Profile</div>
            </div>

            <div className={`dropdown-items ${dropdownState ? "isVisible" : "isHidden"}`}>
              {user ? (
                <>
                  <div className="dropdown-item">
                    <div className="dropdown__link" onClick={() => signOut()}> Sign out</div>
                  </div>

                  <div className="dropdown-item">
                    <Link to="/success"> <div className="dropdown__link"> Orders </div></Link>
                  </div>

                </>
              ) : (
                <>
                  <div className="dropdown-item">
                    <Link to="/login"><div className="dropdown__link"> Login </div></Link>
                  </div>
                  <div className="dropdown-item">
                    <Link to="/register"> <div className="dropdown__link"> Register </div></Link>
                  </div>

                </>
              )
              }
              <div className="dropdown-item">
                <Link to=""> <div className="dropdown__link"> Gift Card </div></Link>
              </div>


              <div className="dropdown-item">
                <Link to=""> <div className="dropdown__link"> Contact us</div></Link>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Image src={heart} alt="" className="dropdown-btn" />
            <div className="profile-title">Wishlist</div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Image src={search} alt="" className="dropdown-btn" />
            <div className="profile-title">Search</div>
          </div>

        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
