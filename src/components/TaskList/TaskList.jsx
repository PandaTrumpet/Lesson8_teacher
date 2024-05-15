import { useSelector } from "react-redux";
import { Tasks } from "../Tasks/Tasks";
import { selectAllTasks } from "../../redux/tasks/selectors";
import css from "./TaskList.module.css";

export default function TaskList() {
  const tasks = useSelector(selectAllTasks);

  return (
    <ul className={css.list}>
      {tasks.map(({ id, text }) => (
        <li key={id}>
          <Tasks id={id} text={text} />
        </li>
      ))}
    </ul>
  );
}
