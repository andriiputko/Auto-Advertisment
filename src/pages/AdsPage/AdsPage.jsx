import { useEffect } from 'react';
import AutoSearch from '../../components/AutoSearch/AutoSearch';
import { Container, Block} from './AdsPage.styled';
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../../redux/operations";
import { getIsLoading } from "../../redux/selectors";
import AdList from '../../components/AdList/AdList';

const AdsPage = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  
  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <Container>
      <Block>
        <AutoSearch />
        {isLoading ? <></> : <AdList />}
      </Block>
    </Container>
  );
};

export default AdsPage;
