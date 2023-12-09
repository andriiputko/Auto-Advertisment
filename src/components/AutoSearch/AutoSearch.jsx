import { Form, Label, SearchButton, StyledSelect } from "./AutoSearch.styled";
import Brands from "./makes"

const AutoSearch = () => {
    const price = [];
    for(let i = 10; i <=200; i +=  10) {
        price.push(i)
    }
  return (
    <>
      <Form>
        <Label>
        Car brand
          <StyledSelect id="brands" name="brands" placeholder="Select the brand">
            <option value="" disabled selected>Select the brand</option>
            {Brands.map(brand => (
                <option value={brand}>{brand}</option>
            ))}
          </StyledSelect>
        </Label>
        <Label>
        Price/ 1 hour
          <StyledSelect id="price" name="price">
          <option value="" disabled selected>To $</option>
          {price.map(num => (
                <option value={num}>{num}</option>
            ))}
        
          </StyledSelect>
        </Label>
        <Label>
        Сar mileage / km
          <input type="range" min="0" max="100000" />
        </Label>

        <SearchButton type="submit">Search</SearchButton>
      </Form>
    </>
  );
};


export default AutoSearch;