import { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartempty } from '../redux/cartRedux';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
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

const MenuItem = styled.div`
  border: none;
  padding: 10px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-size: 12px;
`;

const Login = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(cartempty());
  };
  return (
    <Container>
      <Wrapper>
        <Title data-testid="success">Order Succesully Placed</Title>
        <Form>
          <MenuItem>Thank you for using our service</MenuItem>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <MenuItem onClick={handleClick}>shop more!</MenuItem>
            <MenuItem>click here to continue shopping!!</MenuItem>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
