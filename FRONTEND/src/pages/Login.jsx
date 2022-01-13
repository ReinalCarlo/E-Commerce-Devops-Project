import { useState } from 'react';
import styled from 'styled-components';
import { login } from '../redux/apiCalls';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const MenuItem = styled.div`
  border: none;
  padding: 10px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-size: 12px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &: disabled {
    color: green;
    cursor: not-allowed;
  } ;
`;
const Error = styled.span`
  color: red;
`;
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title data-testid="LOG">LOG IN</Title>
        <Form>
          <Input
            id="username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            id="password"
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>

          <MenuItem>Forgot password?</MenuItem>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <MenuItem>CREATE A NEW ACCOUNT</MenuItem>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
