import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';
// Define a styled component called Container
const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
// Define a styled component called Title
const Title = styled.h1`
  font-size: 70px;
  margin-border: 20px;
  ${mobile({ fontSize: '50px' })}
`;
// Define a styled component called Desc
const Desc = styled.div`
  font-size: 20px;
  margin-border: 20px;
  font-weight: 300;
  ${mobile({ textAlign: 'center' })}
`;
// Define a styled component called InputContainer
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: '80%' })}
`;
// Define a styled component called Input
const Input = styled.input`
  border: none;
  flex: 8;
`;
// Define a styled component called Button
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: lightblue;
  color: white;
`;
// Define a functional component called Newsletter
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
