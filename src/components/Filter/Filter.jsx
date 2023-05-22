import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'store/filter/selectors';
import { setFilter } from 'store/filter/filter-reducer';
import { FilterBox, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <FilterBox>
      <FilterLabel>
        Find contacts by name:
        <FilterInput
          type="text"
          placeholder="Please enter name..."
          value={filter}
          onChange={event => dispatch(setFilter(event.currentTarget.value))}
        />
      </FilterLabel>
    </FilterBox>
  );
};
