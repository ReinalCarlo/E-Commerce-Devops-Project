import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import { mobile } from '../responsive';

// Define a styled component called Container
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: '0px', flexDirection: 'column' })}
`;
// Define a functional component called Categories
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
