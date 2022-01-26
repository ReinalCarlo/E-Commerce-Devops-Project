import styled from 'styled-components';
import { mobile } from '../responsive';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/apiCalls';
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
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const MenuItem = styled.div`
  font-size: 12px;
  flex: 1;
  cursor: pointer;
  margin-left: 45px;
  flex-direction: column;
  color: black;
`;

const Error = styled.span`
  color: red;
`;
const Register = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmpass] = useState('');
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    if (password !== confirmpass) {
      <Error />;
    }
    register(dispatch, {
      name,
      lastname,
      username,
      email,
      password,
      confirmpass,
    });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input
            id="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            id="lastname"
            placeholder="last name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <Input
            id="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            id="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            id="conpassword"
            type="password"
            placeholder="confirm password"
            value={confirmpass}
            onChange={(e) => setConfirmpass(e.target.value)}
          />
          <Agreement>
            By creating an account,I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching}>
            CREATE
          </Button>

          <Link to="/login" style={{ textDecoration: 'none' }}>
            <MenuItem>ALREADY HAVE AN ACCOUNT</MenuItem>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
