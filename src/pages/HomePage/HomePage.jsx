import { Container, Image } from './HomePage.styled';
import img from '../../images/mainImg.jpeg'
import { Title } from '../HomePage/HomePage.styled';
const HomePage = () => {
  return (
    <Container>
      <Title>Rent your favorite car</Title>
      <Image src={img}/>
    </Container>
  );
};

export default HomePage;
