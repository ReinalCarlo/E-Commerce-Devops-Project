import { Add, Remove } from '@material-ui/icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { publicRequest } from '../requestMethods';
import { mobile } from '../responsive';
import LoggedIn from '../components/LoggedIn';
import { useSelector } from 'react-redux';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  background-color: lightblue;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
`;
const ImgContainer = styled.div`
  flex: 1;
  object-fit: cover;
`;
const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  ${mobile({ height: '40vh' })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '10px' })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Price = styled.p`
  font-weight: 200;
  font-size: 40px;
`;
const Brand = styled.span`
  margin: 20px 0px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;
const Filter = styled.div`
  display: flex;
  align-item: center;
`;
const FilterTitle = styled.div``;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const Filtersize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FiltersizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-item: center;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-item: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10%;
  border: 1px solid teal;
  display: flex;
  align-item: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;
const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`/products/find/` + id);
        setProduct(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Container>
      {user ? <LoggedIn /> : <Navbar />}
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Brand>{product.desc}</Brand>
          <Price>Rs {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor
                  color={c}
                  key={c}
                  onClick={() => setColor(c)}
                ></FilterColor>
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <Filtersize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FiltersizeOption key={s}>{s}</FiltersizeOption>
                ))}
              </Filtersize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity('dec')} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('inc')} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Product;
