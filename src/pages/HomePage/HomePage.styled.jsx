import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 padding: 0 5px;
 margin-top: 40px;
 max-width: 768px;

 @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 128px;
    max-width: 1440px;
  }
`;

export const Title = styled.h1`
  font-family: Manrope, sans-serif;
font-size: 28px;
font-weight: 800;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color: #3470ff;
margin-bottom: 40px;

`

export const Image =styled.img`
  width: 100%;
  border-radius: 14px;
`