import { useEffect, useState } from 'react';
import AutoSearch from '../../components/AutoSearch/AutoSearch';
import { Section, AdList, Button } from './AdsPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  useGetAdvertsQuery,
  useGetCarsByPageQuery,
} from '../../redux/operations.js';
import { Loader } from '../../components/Loader/Loader.jsx';
import AdItem from '../../components/AdItem/AdItem.jsx';

const AdsPage = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  const [page, setPage] = useState(1);
  const [catalog, setCatalog] = useState([]);
  const { data, error, isLoading } = useGetCarsByPageQuery(page);
  const { data: allAdverts } = useGetAdvertsQuery();
  const [filters, setFilters] = useState({
    make: '',
    filteredPrices: [],
    minMileage: '',
    maxMileage: '',
  });
  const [filteredAdverts, setFilteredAdverts] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);

  const loadMore = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    if (data) {
      setCatalog((prevCatalog) => [...prevCatalog, ...data]);
    }
  }, [data]);

  useEffect(() => {
    if (isFiltering) {
      if (
        filters.make ||
        filters.filteredPrices.length > 0 ||
        filters.minMileage ||
        filters.maxMileage
      ) {
        const filteredAdverts = allAdverts.filter((advert) => {
          if (filters.make && advert.make !== filters.make.value) {
            return false;
          }
          if (
            filters.filteredPrices.length > 0 &&
            !filters.filteredPrices.some(
              (priceObj) =>
                priceObj.value === advert.rentalPrice.replace('$', '')
            )
          ) {
            return false;
          }
          if (filters.minMileage && advert.mileage < filters.minMileage) {
            return false;
          }
          if (filters.maxMileage && advert.mileage > filters.maxMileage) {
            return false;
          }
          return true;
        });

        setFilteredAdverts(filteredAdverts);
      } else {
        setFilteredAdverts(catalog);
        setIsFiltering(false);
      }
    }
  }, [filters, allAdverts, isFiltering, catalog]);

  const makes = allAdverts
    ? [...new Set(allAdverts.map((advert) => advert.make))]
    : [];
  const prices = allAdverts
    ? [
        ...new Set(
          allAdverts.map((advert) => advert.rentalPrice.replace('$', ''))
        ),
      ]
    : [];
  const mileage = allAdverts
    ? [...new Set(allAdverts.map((advert) => advert.mileage))]
    : [];
  const minMileage = Math.min(...mileage);
  const maxMileage = Math.max(...mileage);
  return (
    <>
        <AutoSearch
          prices={prices}
          minMileage={minMileage}
          maxMileage={maxMileage}
          onFilterChange={(newFilters) => {
            setFilters(newFilters);
            setIsFiltering(true);
          }}
          filters={filters}
        />
        <Section>
          <AdList>
            {isFiltering ? (
              filteredAdverts !== null && filteredAdverts.length > 0 ? (
                filteredAdverts.map((car, index) => (
                  <AdItem key={index} data={car} />
                ))
              ) : (
                <div>No results found for the selected criteria.</div>
              )
            ) : error ? (
              <>Oops, there was an error...</>
            ) : isLoading ? (
              <Loader />
            ) : catalog.length > 0 ? (
              catalog.map((car, index) => <AdItem key={index} data={car} />)
            ) : null}
          </AdList>

          {!isFiltering && data?.length >= 8 && (
            <Button type="button" onClick={loadMore}>
              Load more
            </Button>
          )}
        </Section>
    </>
  );
};

export default AdsPage;
