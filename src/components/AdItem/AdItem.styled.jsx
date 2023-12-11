import styled from '@emotion/styled';
import { ReactComponent as FavoriteIcon } from '../../images/normal.svg';
import { ReactComponent as FavoriteCheck } from '../../images/active.svg';
import Checkbox from '@mui/material/Checkbox';

export const StyledLi = styled.li`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 273px;
  justify-content: space-between;
`;
export const Image = styled.img`
  width: 274px;
  height: 274px;
  display: block;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const CarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CarTagsList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  row-gap: 4px;
  margin-bottom: 28px;
`;
export const CarTags = styled.li`
  font-family: Manrope, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #12141780;
`;

export const Span = styled.span`
  height: 16px;
  border: 1px solid #1214171a;
`;

export const Button = styled.button`
  width: 100%;
  height: 44px;
  padding: 12px 98px;
  background-color: #3470ff;
  transition: 300ms;
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  border-radius: 12px;
  border: none;
  text-decoration: none;

  &:hover {
    background-color: #0b44cd;
    cursor: pointer;
  }
`;

export const FavoriteButton = styled(Checkbox)`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  z-index: 2;
  padding: 0;
  background-color: transparent;

  &:hover svg {
    scale: 1.2;
  }
`;

export const StyledFavoriteIcon = styled(FavoriteIcon)`
  width: 18px;
  height: 18px;
  fill: none;
  transition: 300ms;
`;

export const StyledFavoriteCheck = styled(FavoriteCheck)({
  fill: '#FFFFFFCC',
});
