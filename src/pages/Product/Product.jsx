import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {FilterTitle,FilterColor,FilterSize,FilterSizeOption,AddContainer,AmountContainer,Amount,Button} from './Product.styled';
import {Container,Wrapper,ImgContainer,InfoContainer,Image,Title,Desc,Price,FilterContainer,Filter} from './Product.styled'
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import { publicRequest } from "../../requestMethods";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { addProduct } from "../../redux/cartRedux";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("https://heroku-apis.herokuapp.com/api/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
          {product.desc}
          </Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
          <Filter>
              
            </Filter>

            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
              {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>

          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveCircleOutlineIcon onClick={() => handleQuantity("dec")}/>
              <Amount>{quantity}</Amount>
              <AddCircleOutlineIcon onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
