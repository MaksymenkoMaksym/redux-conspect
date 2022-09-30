// Импортируем хук
import { useSelector, useDispatch } from 'react-redux';
// Импортируем генератор экшена
import { setStatusFilter } from '../../redux/actions';
// Импортируем объект значений фильтра
import { statusFilters } from '../../redux/constants';

import { Button } from 'components/Button/Button';
// import css from './StatusFilter.module.css';
import { getStatusFilter } from 'redux/selectors';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  // Вызываем генератор экшена и передаём значение фильтра
  // Отправляем результат - экшен изменения фильтра
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  // Получаем значение фильтра из состояния Redux
  const filter = useSelector(getStatusFilter);

  return (
    <div>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
