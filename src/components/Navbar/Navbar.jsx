import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";

import { Center, Container, Left, Logo, MenuItem, Right, Wrapper,Image,MenuItems } from './Navbar.styled';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from './images/user.png';
import heart from './images/heart.png';
import search from './images/search.png';
import "./images/Styles.css";

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
            <Logo>Aéropostale</Logo>
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
                    <div className="dropdown__link"> Profile Details</div>
                  </div>

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
