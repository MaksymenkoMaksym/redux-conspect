import { useSelector } from 'react-redux';
import { getTasks } from 'redux/selectors';
import css from './TaskCounter.module.css';

export const TaskCounter = () => {
  const tasks = useSelector(getTasks);
  const res = tasks.reduce(
    (acc, el) => {
      if (el.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  return (
    <div>
      <p className={css.text}>Active: {res.active}</p>
      <p className={css.text}>Completed: {res.completed}</p>
    </div>
  );
};
