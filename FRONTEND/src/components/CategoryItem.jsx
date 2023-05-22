import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';
// Define a styled component called Container
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
// Define a styled component called Image
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: '60vh' })}
`;
// Define a styled component called Info
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
// Define a styled component called Title
const Title = styled.h1`
  color: white;
  margin=bottom: 20px;
`;
// Define a styled component called Button
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: black;
  cursor: pointer;
`;
// Define a functional component called CategoryItem
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
