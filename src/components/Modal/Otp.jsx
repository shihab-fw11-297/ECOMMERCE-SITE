import "./payment.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router";
import { clearProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

export const Otp = () => {
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
 
    const createOrder = async () => {
      try {
        await axios.post("https://heroku-apis.herokuapp.com/api/orders", {
          userId: currentUser.currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
            name:item.title,
            img:item.img,
            price:item.price,
          })),
          amount: cart.total,
          address:currentUser.currentUser.address
        });
        dispatch(clearProduct("sucsess"));
        history.push("/success");
        
      } catch(err) {
        console.log(err);
      }
    };

  return (
    <div>
      <div id="body-phone">
        <div id="heading-phone">Paytm Wallet</div>
        <div id="enter">Enter the 6-digit code sent to your Number </div>
        <div id="enter-number">
          <input id="otp"
            type="text"
            maxlength="6"
          />
        </div>
        <div id="info">Haven't recieved the OTP</div>
        <p>resend OTP</p>
        <button id="btn-2" onClick={createOrder}>CONFIRM</button>
      </div>
    </div>
  );
};