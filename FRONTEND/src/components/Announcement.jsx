import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: pink;
  color: white;
  display: flex;
  align-item: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return <Container>70% OFF! Summer vibes, mode on!</Container>;
};

export default Announcement;
