import styled from '@emotion/styled';

export const Container = styled.div`
    max-width: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
    max-width: 768px;
  };

  @media screen and (min-width: 1280px) {
    max-width: 1440px;
  }
`

