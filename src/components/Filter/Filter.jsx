import { useSelector, useDispatch } from 'react-redux';
import { onFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';
import { Field, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(onFilter(evt.currentTarget.value));
  };

  return (
    <Field>
      Find contacts by name
      <Input type="text" value={filter} onChange={changeFilter} />
    </Field>
  );
};
