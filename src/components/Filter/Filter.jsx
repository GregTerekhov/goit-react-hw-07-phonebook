import React from 'react';
import { FilterBox, FilterLabel, FilterInput } from './Filter.styled';
import { useContacts } from 'hooks/useContacts';

export const Filter = () => {
  const { filter, setFilter } = useContacts();

  return (
    <FilterBox>
      <FilterLabel>
        Find contacts by name:
        <FilterInput
          type="text"
          placeholder="Please enter name..."
          value={filter}
          onChange={event => setFilter(event.currentTarget.value)}
        />
      </FilterLabel>
    </FilterBox>
  );
};
