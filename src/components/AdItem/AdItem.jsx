import { useState } from 'react';
import BasicModal from 'components/Modal/Modal';
import {
  Button,
  CarContainer,
  CarTags,
  CarTagsList,
  StyledFavoriteCheck,
  StyledFavoriteIcon,
  Image,
  Span,
  StyledLi,
  FavoriteButton,
} from './AdItem.styled';
import icons from '../../images/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import { addFavorite, removeFavorite } from '../../redux/favoriteSlice';

const AdItem = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const cars = useSelector(selectFavorites);
  const isChecked = cars.some(({ id }) => id === data.id);

  const handleToggleFavorite = () => {
    if (isChecked) {
      dispatch(removeFavorite(data));
    } else {
      dispatch(addFavorite(data));
    }
  };

  return (
    <StyledLi>
      <FavoriteButton
        icon={<StyledFavoriteIcon />}
        checkedIcon={<StyledFavoriteCheck />}
        checked={isChecked}
        onChange={handleToggleFavorite}
      />
      <Image src={data.img} alt={data.brand} />

      <CarContainer>
        <h3>
          {data.brand}
          <span> {data.model}</span>, {data.year}
        </h3>
        <span>{data.rentalPrice}</span>
      </CarContainer>

      <CarTagsList>
        <CarTags>{data.address.split(', ')[1]}</CarTags>
        <Span></Span>
        <CarTags>{data.address.split(', ')[2]}</CarTags>
        <Span></Span>
        <CarTags>{data.rentalCompany}</CarTags>
        <Span></Span>
        <CarTags>Premium {data.type}</CarTags>
        <Span></Span>
        <CarTags>{data.brand}</CarTags>
        <Span></Span>
        <CarTags>{data.id}</CarTags>
        <Span></Span>
        <CarTags>{data.accessories[2]}</CarTags>
      </CarTagsList>

      <Button onClick={handleOpen}>Learn more</Button>

      {open && <BasicModal open={open} onClose={handleClose} data={data} />}
    </StyledLi>
  );
};

export default AdItem;
