import { Task } from 'components/Task/Task';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/operations';
import { getStatusFilter, getState } from 'redux/selectors';
import { statusFilters } from '../../redux/constants';
// eslint-disable-next-line
import css from './TaskList.module.css';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};
export const TaskList = () => {
  // const tasks = useSelector(getTasks);
  const { items, error, isLoading } = useSelector(getState);
  const statusFilter = useSelector(getStatusFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const visibleTasks = getVisibleTasks(items, statusFilter);

  return (
    <>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <ul className={css.list}>
        {items.length > 0 &&
          visibleTasks.map(task => (
            <li className={css.listItem} key={task.id}>
              <Task task={task} />
            </li>
          ))}
      </ul>
    </>
  );
};
