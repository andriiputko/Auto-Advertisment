import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Section = styled.section`
  max-width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 128px;
    max-width: 1440px;
  }
`;

export const AdList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 29px;
  row-gap: 50px;
  flex-wrap: wrap;
  margin-top: 50px;

  max-width: 240px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1440px;
  }
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
