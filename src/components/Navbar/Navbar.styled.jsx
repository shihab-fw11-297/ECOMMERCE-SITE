
import styled from "styled-components";

export const Container = styled.div`
padding: 0rem 0;
position: sticky;
top: 0;
left: 0;
right: 0;
z-index: 200;
background-color: white;
border-bottom: 1px solid lightgray;

`;

export const Wrapper = styled.div`
max-width: 90rem;
margin: 0 auto;
padding: 0 1.55rem;
display: flex;
align-items: center;
justify-content: space-between;

`;

export const Left = styled.div`
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


export const Center = styled.div`
flex: 2;
display: flex;
text-align: center;

`;

export const Logo = styled.h1`
font-weight: bold;
font-size: 2.25rem;
line-height: 2.5rem;
text-transform: uppercase;
`;

export const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-center;
gap:20px;
`;

export const MenuItem = styled.div`
font-size: 1rem;
display: flex;
cursor: pointer;
text-transform: uppercase;
margin-left: 15px;
margin-right:2px;
margin-top:3px;
`;

export const Image = styled.img`
width:18px;
height:18px
`;

export const MenuItems = styled.h3`
font-size: 1rem;
cursor: pointer;
text-transform: uppercase;
margin-left: 16px;
margin-right:2px;
`;