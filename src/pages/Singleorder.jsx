import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useParams } from "react-router";

const Container = styled.div``;

const Wrapper = styled.div`
padding: 20px;
width:70%;
margin:auto;
margin-top:20px;
border:1px solid lightgrey;
${mobile({ padding: "10px" })}
`;


const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h1`
  width:500px;
  margin:auto;
  margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
`;


const ProductName = styled.span``;

const ProductId = styled.span`
font-size: 15px;
font-family:'Quicksand-Regular';
`;



const Singleorder = () => {
    const para = useParams();
  const [data, setData] = useState([])
 
  useEffect(() => {
    const fetchPosts = async () => {
      await axios.get("http://localhost:5000/api/orders/singleOrders/" + para.id).then((res)=>{
        setData(res.data[0].products);
      })
      
    };
    fetchPosts();
  }, []);

console.log(data);
 
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Your Order Full Details</Title>
     
      <Wrapper>
      
        <Info>
          {data.map((product) => (
            <Product>
            <ProductDetail>
              <Image src={product.img} />
              <Details>
              <ProductId>
                  <b>Product Id :</b> {product.productId}
                </ProductId>
                <ProductName>
                  <b>Product Name:</b> {product.name}
                </ProductName>
                
                <ProductName>
                  <b>Product Price:</b>  {product.price}
                </ProductName>
                <ProductName>
                  <b>Qty:</b> {product.quantity}
                </ProductName>
              </Details>
            </ProductDetail>
          </Product>
          ))}
        
        </Info>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Singleorder;