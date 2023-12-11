import { Form, Label, SearchButton, StyledSelect } from './AutoSearch.styled';
import Brands from './makes';
import { useState } from 'react';

const AutoSearch = ({ prices, onFilterChange }) => {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPriceStep, setSelectedPriceStep] = useState(null);
  const [selectedPriceLabel, setSelectedPriceLabel] = useState('');
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const makeOptions = Brands.map((make) => ({ value: make, label: make }));

  const priceRangeOptions = [];

  for (let i = 10; i <= 300; i += 10) {
    priceRangeOptions.push({ value: i, label: `${i}` });
  }

  const handlePriceStepChange = (selectedOption) => {
    if (selectedOption === null) {
      setSelectedPriceStep(null);
      setSelectedPriceLabel('');
    } else {
      setSelectedPriceStep(selectedOption.value);
      setSelectedPriceLabel(selectedOption.label);
    }
  };
  const filteredPrices = prices.filter((price) => price <= selectedPriceStep);

  const formatMileage = (value) => {
    const cleanedValue = value.toString().replace(/,/g, '');
    const formattedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return formattedValue;
  };

  const handleMinInputChange = (e) => {
    setMinValue(e.target.value);
  };

  const handleMaxInputChange = (e) => {
    setMaxValue(e.target.value);
  };

  const handleFilterClick = () => {
    if (
      parseInt(minValue.replace(/,/g, ''), 10) >
      parseInt(maxValue.replace(/,/g, ''), 10)
    ) {
      toast.error('Minimum mileage cannot be greater than maximum mileage');
    }

    const newFilters = {
      make: selectedMake,
      filteredPrices: filteredPrices.map((price) => ({
        value: price,
        label: `${price}`,
      })),
      minMileage: parseInt(minValue.replace(/,/g, ''), 10),
      maxMileage: parseInt(maxValue.replace(/,/g, ''), 10),
    };
    onFilterChange(newFilters);
  };
  return (
    <>
      <Form>
        <Label>
          Car brand
          <StyledSelect
            id="nameSelect"
            placeholder="Enter the text"
            value={selectedMake}
            onChange={(selectedOption) => setSelectedMake(selectedOption)}
            options={makeOptions}
            isClearable
            styles={{
              control: (styles) => ({
                ...styles,
                width: '224px',
                height: '48px',
                borderColor: 'rgba(18, 20, 23, 0.2)',
                border: 'none',
                borderRadius: '14px',
                padding: '8px',
                fontSize: '16px',
                fontFamily: 'ManropeMedium, sans-serif',
                backgroundColor: 'rgba(247, 247, 251, 1)',
                appearance: 'none',
              }),
              option: (styles, { isFocused }) => {
                return {
                  ...styles,
                  color: isFocused ? 'black' : 'rgba(18, 20, 23, 0.2)',
                  fontFamily: 'ManropeMedium, sans-serif',
                };
              },
              menuList: (base) => ({
                ...base,
                '::-webkit-scrollbar': {
                  width: '9px',
                },
                '::-webkit-scrollbar-track': {
                  background: 'rgba(18, 20, 23, 0.05)',
                },
                '::-webkit-scrollbar-thumb': {
                  background: 'rgba(18, 20, 23, 0.05)',
                },
                '::-webkit-scrollbar-thumb:hover': {
                  background: 'rgba(18, 20, 23, 0.05)',
                },
              }),
              placeholder: (styles) => ({
                ...styles,
                color: 'rgba(18, 20, 23, 1)',
              }),
            }}
            components={{
              IndicatorSeparator: () => null,
            }}
          ></StyledSelect>
        </Label>
        <Label>
          Price/ 1 hour
          <StyledSelect
            id="price"
            name="price"
            value={
              selectedPriceStep
                ? { value: selectedPriceStep, label: selectedPriceLabel }
                : null
            }
            onChange={handlePriceStepChange}
            options={priceRangeOptions}
            isClearable
            styles={{
              control: (styles) => ({
                ...styles,
                width: '125',
                height: '48px',
                borderColor: 'rgba(18, 20, 23, 0.2)',
                border: 'none',
                borderRadius: '14px',
                padding: '8px',
                fontSize: '16px',
                fontFamily: 'ManropeMedium, sans-serif',
                backgroundColor: 'rgba(247, 247, 251, 1)',
                appearance: 'none',
              }),
              option: (styles, { isFocused }) => {
                return {
                  ...styles,
                  color: isFocused ? 'black' : 'rgba(18, 20, 23, 0.2)',
                  fontFamily: 'ManropeMedium, sans-serif',
                };
              },
              menuList: (base) => ({
                ...base,
                '::-webkit-scrollbar': {
                  width: '9px',
                },
                '::-webkit-scrollbar-track': {
                  background: 'rgba(18, 20, 23, 0.05)',
                },
                '::-webkit-scrollbar-thumb': {
                  background: 'rgba(18, 20, 23, 0.05)',
                },
                '::-webkit-scrollbar-thumb:hover': {
                  background: 'rgba(18, 20, 23, 0.05)',
                },
              }),
              placeholder: (styles) => ({
                ...styles,
                color: 'rgba(18, 20, 23, 1)',
              }),
            }}
            components={{
              IndicatorSeparator: () => null,
            }}
          ></StyledSelect>
        </Label>
        <Label>
          Сar mileage / km
          <input type="range" min="0" max="100000" />
        </Label>

        <SearchButton onClick={handleFilterClick}>Search</SearchButton>
      </Form>
    </>
  );
};

export default AutoSearch;
