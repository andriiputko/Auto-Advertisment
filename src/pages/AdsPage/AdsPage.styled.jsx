import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Section = styled.section`
  max-width: 1440px;
  padding: 0 120px;
  margin: 0 auto;
`;

export const AdList = styled.ul`
  display: flex;
  gap: 29px;
  row-gap: 50px;
  flex-wrap: wrap;
  margin-top: 50px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Block = styled.div`
  text-align: center;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
  transition:
    color 0.3s,
    text-shadow 0.3s;
  display: block;
  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #3470ff;
  text-transform: none;
  margin-bottom: 50px;
  margin-top: 100px;
`;
