import React from 'react';
import { Input } from 'components/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleInputChange = event => {
    dispatch(filterChange(event.target.value));
  };
  return (
    <div>
      <Input
        type="text"
        label="find contacts by name"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleInputChange}
      />
    </div>
  );
};
