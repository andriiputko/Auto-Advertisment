import { useState } from 'react';
import PropTypes from 'prop-types';
import BasicModal from 'components/Modal/Modal';
import {
  Button,
  CarContainer,
  CarTags,
  CarTagsList,
  FavoriteButton,
  FavoriteIcon,
  Image,
  Span,
  StyledLi,
} from './AdItem.styled';
import icons from "../../images/icons.svg";

const AdItem = ({ advert }) => {
  const {
    img,
    make: brand,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    accessories,
  } = advert;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRoot = document.getElementById('modal');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <StyledLi>
      <FavoriteButton type="submit">
        <FavoriteIcon width={18} height={18}>
        <use href={icons + "#heart"} />
        </FavoriteIcon>
      </FavoriteButton>
      <Image src={img} alt={brand} />

      <CarContainer>
        <h3>
          {brand}
          <span> {model}</span>, {year}
        </h3>
        <span>{rentalPrice}</span>
      </CarContainer>

      <CarTagsList>
        <CarTags>{address.split(', ')[1]}</CarTags>
        <Span></Span>
        <CarTags>{address.split(', ')[2]}</CarTags>
        <Span></Span>
        <CarTags>{rentalCompany}</CarTags>
        <Span></Span>
        <CarTags>Premium {type}</CarTags>
        <Span></Span>
        <CarTags>{brand}</CarTags>
        <Span></Span>
        <CarTags>{id}</CarTags>
        <Span></Span>
        <CarTags>{accessories[2]}</CarTags>
      </CarTagsList>

      <Button onClick={handleOpen}>Learn more</Button>

      {open && <BasicModal open={open} onClose={handleClose} data={advert} />}
    </StyledLi>
  );
};

AdItem.propTypes = { advert: PropTypes.object.isRequired };

export default AdItem;
