import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasks/operations";
import css from "./Tasks.module.css";

export const Tasks = ({ id, text }) => {
  // const dispatch = useDispatch();
  // const handleDelete = () => dispatch(deleteTask(id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
      <button type="button" className={css.button}>
        Delete
      </button>
    </div>
  );
};
