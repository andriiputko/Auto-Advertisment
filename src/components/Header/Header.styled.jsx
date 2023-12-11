import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
width: 100%;
  padding: 20px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  color: #121417;
  color: inherit
  text-decoration: none;
  
  transition: 300ms;

  &:hover,
  &:focus {
    color: #3470FF;
  }
  
`;
