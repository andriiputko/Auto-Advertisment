import styled from '@emotion/styled';

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
  color: #8A8A89;

`;

export const StyledSelect = styled.select`
  background-color: #f7f7fb;
  padding: 14px 18px;
  color: #121417;
  font-family: Manrope, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  border-radius: 14px;
  border: none;
`;


export const SearchButton = styled.button`
background-color: #3470FF;
padding: 14px 44px;
color: #FFFFFF;
border-radius: 12px;
border: none;
`