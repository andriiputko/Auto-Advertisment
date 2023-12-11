import {
  HeaderContainer,
  Navigation,
  StyledLink
} from './Header.styled';
import sprite from 'assets/sprite.svg';

export const Header = () => {

  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/home">
          Home
        </StyledLink>
        <StyledLink to="/catalog">
          Ads
        </StyledLink>
        <StyledLink to="/favorites">
          Favorite
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
