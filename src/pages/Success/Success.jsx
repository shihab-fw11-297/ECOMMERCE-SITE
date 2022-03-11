import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import {Product,Detail,ProductId,ProductTitle,Details,ProductDetails,PriceDetail} from './Success.styled';
import {Container,Wrapper,Title,Infos,ProductDetail,Info,Title1,ProductPrice,Hr,Button} from './Success.styled'

const Success = () => {
  const [data, setData] = useState([])
  const currentUser = useSelector((state) => state.user);


  const fetchPosts = async () => {
    await axios.get(`https://heroku-apis.herokuapp.com/api/orders/find/${currentUser.currentUser._id}`).then((res) => {
      setData(res.data);
    })

  };


  useEffect(() => {
    fetchPosts();
    //eslint-disable-next-line
  }, []);

  const cancelOrder = async (e) => {
    await axios.put(`http://localhost:5000/api/orders/cancel/${e}`).then(() => {
      alert("order has been successfully cancel");
      fetchPosts();
    })
  }

  function check(product) {
    let data = product.products.length;
    return data;
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <div>

        {data.length >= 1 ?
          <>
            <Title>Thank you for New Order</Title>
            <Title1>Click Perticular Order and Check Order Full Details</Title1>
          </>
          :
          <Title>Please Create New Order</Title>
        }
      </div>
      <Wrapper>

        <Infos>
          <Product>
            <ProductDetails>
              <Detail>
                <ProductTitle>
                  Account  
                </ProductTitle>
                <ProductId>
                  <b>Name :  {currentUser.currentUser.fname}{currentUser.currentUser.lname} </b>
                </ProductId>
                <ProductId>
                  <b>User email : {currentUser.currentUser.email} </b>
                </ProductId>
                <ProductId>
                  <b>Shipping Address : {currentUser.currentUser.address} </b>
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

            <Product>
              <Link to={`/Singleorder/${product.orderID}`}>
                <ProductDetail>
                  <Details>
                    <ProductId>
                      <b>Shipping Address : {product.address}  </b>
                    </ProductId>

                    {/* <ProductIds>
                      <b>Order id:</b> {product.orderID}
                    </ProductIds> */}
                    <ProductId>
                      <b>Total Amount : {product.amount} </b>
                    </ProductId>
                    <ProductId>
                      <b>Quantity: {check(product)} </b>
                    </ProductId>
                  </Details>
                </ProductDetail>
              </Link>
              <PriceDetail>
                {
                  product.status === 'pending' ?
                    <ProductPrice>
                      <Button onClick={() => cancelOrder(product._id)}>Cancel Order</Button>
                    </ProductPrice>
                    : product.status === 'fullfield' ?

                      <ProductPrice>
                        <b>Order has been deliverd.</b>
                      </ProductPrice>
                      :
                      <ProductPrice>
                        <b>Order has been cancelled</b>
                      </ProductPrice>
                }
                <ProductPrice>
                  <b>Order status :{product.status} </b> 
                </ProductPrice>

                <ProductPrice>
                  <b>Order Date: {new Date(product.createdAt).toDateString()} </b> 
                </ProductPrice>
              </PriceDetail>
            </Product>

          ))}
          <Hr />
        </Info>
      </Wrapper>
      <Footer />
    </Container >
  );
};

export default Success;