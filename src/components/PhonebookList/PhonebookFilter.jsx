import { useDispatch, useSelector } from 'react-redux';
import { FilterForm } from './PhonebookList.styled';
import { changeFilterAction } from 'store/filter/actions';

const PhonebookFilter = () => {
  const { filter } = useSelector(state => state.filter);
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
        value={filter}
        onChange={handleChange}
      />
    </FilterForm>
  );
};

export default PhonebookFilter;
