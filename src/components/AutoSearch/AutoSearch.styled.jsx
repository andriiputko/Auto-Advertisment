import styled from '@emotion/styled';
import Select from 'react-select';

export const Container = styled.div`
  max-width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10px;
  gap: 8px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1440px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: baseline;
  justify-content: center;
  max-width: 240px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    margin-right: 40px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1440px;
    margin-right: 10px;
    justify-content: space-between;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: baseline;
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #8a8a89;
`;

export const StyledSelect = styled(Select)``;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  height: 48px;
`;

export const SearchButton = styled.button`
  background-color: #3470ff;
  padding: 14px 44px;
  color: #ffffff;
  border-radius: 12px;
  border: none;
  margin-top: 24px;
`;

export const InputLeft = styled.input`
  display: block;
  width: 140px;
  height: 48px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: rgba(247, 247, 251, 1);
  border-radius: 14px 0 0 14px;
  padding-left: 0;
  text-indent: 70px;

  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
  &:focus {
    outline-color: #3470ff;
  }
`;

export const InputRight = styled.input`
  display: block;
  width: 140px;
  height: 48px;
  border: none;
  background-color: rgba(247, 247, 251, 1);
  border-radius: 0 14px 14px 0;
  padding-left: 0;
  text-indent: 45px;

  font-family: 'Manrope', sans-serif;
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
  &:focus {
    outline-color: #3470ff;
  }
`;

export const UnitLeft = styled.span`
  position: absolute;
  display: block;
  left: 20px;
  top: 15px;
  font-family: 'Manrope', sans-serif;
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
`;

export const UnitRight = styled.span`
  position: absolute;
  display: block;
  left: 180px;
  top: 15px;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
`;
