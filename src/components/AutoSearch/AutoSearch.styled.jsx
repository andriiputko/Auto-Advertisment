import styled from '@emotion/styled';
import Select from 'react-select';

export const Form = styled.form`
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: center;
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

export const SearchButton = styled.button`
  background-color: #3470ff;
  padding: 14px 44px;
  color: #ffffff;
  border-radius: 12px;
  border: none;
`;
