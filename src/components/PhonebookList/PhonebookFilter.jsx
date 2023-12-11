import { useDispatch } from 'react-redux';
import { FilterForm } from './PhonebookList.styled';
import debounce from 'lodash.debounce';
import { changeFilterAction } from 'store/filterSlice';

const PhonebookFilter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    dispatch(changeFilterAction(value));
  };

  return (
    <FilterForm>
      <label htmlFor="filter">Find contacts:</label>
      <input
        type="text"
        name="filter"
        id="filter"
        onChange={debounce(e => handleChange(e), 200)}
        autoComplete="off"
      />
    </FilterForm>
  );
};

export default PhonebookFilter;
