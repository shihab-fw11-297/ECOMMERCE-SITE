
import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20px;
  width:70%;
  display:flex;
  margin:auto;
margin-top:20px;
  margin-left:20px;
  margin:auto;
  ${mobile({ padding: "10px" })}
`;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductPrice = styled.div`
  font-size: 17px;
  font-weight: 200;
  text-align:left;
  align-items: left;
  width:250px;
  margin-bottom:10px;
  justify-content: left;
  ${mobile({ marginBottom: "20px" })}
`;


export const Info = styled.div`
  flex: 3;
`;

export const Infos = styled.div`
  flex-direction: column;
  margin-right:30px;
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  border:1px solid lightgrey;
  margin-bottom:10px;
  ${mobile({ flexDirection: "column" })}
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

export const ProductDetails = styled.div`
  flex: 2;
  display: flex;
  justify-content:center;
text-align:center;
align-items: center;
`;


export const ProductTitle = styled.div`
justify-content:center;
text-align:center;
align-items: center;
margin-bottom:20px;
font-weight:600;
`;

export const Detail = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
justify-content:center;
text-align:center;
align-items: center;
`;


export const Title = styled.h1`
  width:500px;
  margin:auto;
  margin-top: 30px;
    text-align: center;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;


export const Title1 = styled.h4`
  width:500px;
  margin:auto;
    margin-bottom: 30px;
    text-align: center;
`;

export const ProductId = styled.span`
margin-bottom:10px;
`;

// const ProductIds = styled.span`
// font-size: 17px;
// margin-bottom:10px;
// `;

export const Button = styled.button`
  padding: 2px 10px;
  font-size: 17px;
  margin-bottom:2px;
  background-color: transparent;
  cursor: pointer;
`;