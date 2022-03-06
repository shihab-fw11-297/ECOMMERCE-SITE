import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  width:70%;
  margin:auto;
  margin-top:20px;
  border:1px solid lightgrey;
  ${mobile({ padding: "10px" })}
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductPrice = styled.div`
  font-size: 17px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;


const Info = styled.div`
  flex: 3;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
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
const Title = styled.h1`
  width:500px;
  margin:auto;
  margin-top: 30px;
    text-align: center;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title1 = styled.h4`
  width:500px;
  margin:auto;
    margin-bottom: 30px;
    text-align: center;
`;


const ProductName = styled.span``;

const ProductId = styled.span``;


const Success = () => {
  const [data, setData] = useState([])
  const currentUser = useSelector((state) => state.user);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/orders/find/" + currentUser.currentUser._id).then((res) => {
        setData(res.data);
      })

    };
    fetchPosts();
  }, []);


  function check(product) {
    let data = product.products.length;
    return data;
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Thank you for New Order</Title>
      <Title1>Click Perticular Order and Check Order Full Details</Title1>
      <Wrapper>

        <Info>
          {data.map((product) => (
            <Link to={`/Singleorder/${product.orderID}`}>
              <Product>
                <ProductDetail>
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.orderID}
                    </ProductName>
                    <ProductId>
                      <b>Total Amount:</b> {product.amount}
                    </ProductId>
                    <ProductId>
                      <b>Quantity:</b> {check(product)}
                    </ProductId>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductPrice>
                    <b>status:</b> {product.status}
                  </ProductPrice>

                  <ProductPrice>
                    <b>Order Data:</b> {new Date(product.createdAt).toDateString()}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            </Link>
          ))}
          <Hr />
        </Info>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Success;