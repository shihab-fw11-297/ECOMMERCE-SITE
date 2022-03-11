import { useEffect, useState } from "react";
import axios from "axios";
import {Product,Detail,ProductId,ProductTitle,Image,Details,ProductIds} from './Singleorder.styled';
import {Container,Wrapper,Title,Infos,ProductDetail,ProductDetails,ProductName,Info} from './Singleorder.styled'
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



const Singleorder = () => {
  const currentUser = useSelector((state) => state.user);
    const para = useParams();
  const [data, setData] = useState([])
 
  useEffect(() => {
    const fetchPosts = async () => {
      await axios.get(`https://heroku-apis.herokuapp.com/api/orders/singleOrders/${para.id}`).then((res)=>{
        setData(res.data[0].products);
      })
      
    };
    fetchPosts();
     //eslint-disable-next-line
  }, []);

 
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Your Order Full Details</Title>
     
      <Wrapper>
      <Infos>
          <Product>
            <ProductDetails>
              <Detail>
                <ProductTitle>
                  <b>Account : </b>
                </ProductTitle>
                <ProductId>
                  <b>Name : {currentUser.currentUser.fname} {currentUser.currentUser.lname}</b> 
                </ProductId>
                <ProductId>
                  <b>User email :  {currentUser.currentUser.email} </b>
                </ProductId>
                <ProductId>
                  <b>Shipping Address :   {currentUser.currentUser.address}</b>
                </ProductId>
              </Detail>

            </ProductDetails>
          </Product>

          <Product>
            <ProductDetails>
              <Detail>
                <ProductTitle>
                  <b>ORDERS </b>
                </ProductTitle>
                <ProductTitle>
                  <b>Orders & Returns </b>
                </ProductTitle>
              </Detail>
            </ProductDetails>
          </Product>

          
          <Product>
            <ProductDetails>
              <Detail>
                <ProductTitle>
                  <b>CREDITS </b>
                </ProductTitle>
                <ProductId>
                  <b> Coupons </b>
                </ProductId>
                <ProductId>
                  <b>Aeropostale Credit </b>
                </ProductId>
                <ProductId>
                  <b> Aeropostale Cash </b>
                </ProductId>
              </Detail>
            </ProductDetails>
          </Product>
        </Infos>


        <Info>
          {data.map((product) => (
            <Link to={`/product/${product.productId}`}>
            <Product>
            <ProductDetail>
              <Image src={product.img} />
              <Details>
              <ProductIds>
                  <b>Product Id : {product.productId} </b>
                </ProductIds>
                <ProductName>
                  <b>Product Name: {product.name}</b> 
                </ProductName>
                
                <ProductName>
                  <b>Product Price :  {product.price}</b> 
                </ProductName>
                <ProductName>
                  <b>Qty : {product.quantity} </b> 
                </ProductName>
              </Details>
            </ProductDetail>
          </Product>
          </Link>
          ))}
        
        </Info>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Singleorder;