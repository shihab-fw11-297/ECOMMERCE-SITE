import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div``;

export const Wrapper = styled.div`
display:flex;
padding: 20px;
width:70%;
margin:auto;
margin-top:20px;
${mobile({ padding: "10px" })}
`;


export const Info = styled.div`
  flex: 3;
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

export const Infos = styled.div`
  margin-right:30px;
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

export const ProductTitle = styled.div`
justify-content:center;
text-align:center;
align-items: center;
margin-bottom:20px;
`;

export const Image = styled.img`
  width: 200px;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.h1`
  width:500px;
  margin:auto;
  margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
`;

export const ProductDetails = styled.div`
  flex: 2;
  display: flex;
  justify-content:center;
text-align:center;
align-items: center;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span`
margin-bottom:10px;
`;

export const ProductIds = styled.span`
`;
