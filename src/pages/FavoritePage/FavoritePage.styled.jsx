import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px 29px;
  margin-top: 50px;
  margin-bottom: 50px;

  @media screen and (min-width: 425px) {
    padding-left: 128px;
    padding-right: 128px;
  }
`;
