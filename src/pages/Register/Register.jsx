import {Container,Wrapper,Title,Form,Input,Agreement,Button} from './Register.styled';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from 'react-router-dom';
import axios from "axios";


const Register = () => {

  const initState = {
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
    cpassword:"",
    address:""
}

    const [userData, setUserData] = useState(initState);
    const [signuperror, setSignUpError] = useState(false)
    const history = useHistory();

    const handleInput = (e) => {
      let { name, value } = e.target;
      setUserData({ ...userData, [name]: value })
  }

  const normalSignUp = (e) => {

    e.preventDefault();
    if (!userData.fname || !userData.lname || !userData.username  || !userData.email || !userData.password || !userData.cpassword ) {
        setSignUpError(true)
        emptyData()
    }
    axios.post(`https://heroku-apis.herokuapp.com/api/auth/register`, userData).then(res => {
        setSignUpError(false)
        emptyData()
        history.push("/login");
    }).catch(function (e) {
        setSignUpError(true)
        emptyData()
    })
}

const emptyData = () => {
  setUserData({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
    cpassword:"",
    address:""
  })
}


  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input type="test" onChange={handleInput} name="fname" placeholder="Enter First name" value={userData.fname} />
            <Input type="test" onChange={handleInput} name="lname" placeholder="Enter Last name" value={userData.lname}  />
            <Input type="test" onChange={handleInput} name="username" placeholder="Enter Username" value={userData.username} />
            <Input type="email" onChange={handleInput} name="email" placeholder="Enter Email" value={userData.email} />
            <Input type="password" onChange={handleInput} name="password" placeholder="Enter Password" value={userData.password} />
            <Input type="password"onChange={handleInput} name="cpassword" placeholder="Enter Confirm Password" value={userData.cpassword} />
            <Input type="test" onChange={handleInput} name="address" placeholder="Enter Address" value={userData.address} />

            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button onClick={normalSignUp}>CREATE</Button>
          </Form>
          <p className="AlreadyRegister">If you are Alredy Registerd Then Please <b><Link to="/login">Click Here</Link></b></p>
          {signuperror ? <p className="AlreadyRegister">Already registered else Empty Fields are not allowed, please go to login</p> : ""}
        </Wrapper>
      </Container>
      <Footer/>
    </>
  );
};

export default Register;
