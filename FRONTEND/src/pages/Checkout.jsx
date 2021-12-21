import styled from 'styled-components';
import { mobile } from '../responsive';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { order } from '../redux/apiCalls';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
`;
const MenuItem = styled.div`
  font-size: 12px;
  flex: 1;
  cursor: pointer;
  margin-left: 45px;
  flex-direction: column;
  color: black;
`;

const Checkout = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [billingaddress, setBillingaddress] = useState('');

  return (
    <Container>
      <Wrapper>
        <Title>ORDER</Title>
        <Form>
          <Input
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="billingaddress"
            placeholder="billingaddress"
            value={billingaddress}
            onChange={(e) => setBillingaddress(e.target.value)}
          />
          <Button>ORDER</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Checkout;
