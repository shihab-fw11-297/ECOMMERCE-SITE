import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Wrapper, TopButton,Image, Container,Details,TopTexts,ProductPrice,ProductAmount,ProductId,ProductSize,ProductColor,ProductName,ProductAmountContainer,TopText,Title,Top,Bottom,Info,Product,PriceDetail,ProductColors,ProductDetail } from './Cart.styled'
import {Summary,SummaryTitle,Hr,SummaryItem,SummaryItemText,SummaryItemPrice,SummaryItemText1,Button} from './Cart.styled';
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import {ModalInFunctionalComponent} from "../../components/Modal/Modal";



const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/">
          <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag({cart.quantity})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColors>
                    <b>color:</b> <ProductColor color={product.color} />
                    </ProductColors>
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <AddCircleOutlineIcon />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <RemoveCircleOutlineIcon />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>

            {cart.quantity >=1 && currentUser.currentUser !== null?
              <Button><ModalInFunctionalComponent price={cart.total}/></Button>
           :
           <SummaryItemText1>User is not login or Item is not addedd in cart</SummaryItemText1>
            }
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;