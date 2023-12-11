import { useDispatch } from 'react-redux';
import { FilterForm } from './PhonebookList.styled';
import { changeFilterAction } from 'store/filter/actions';
import debounce from 'lodash.debounce';

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
      />
    </FilterForm>
  );
};

export default PhonebookFilter;
