import styles from "./BackButton.module.scss";
import { NavLink } from "react-router-dom";
const BackButton = () => {
  return (
    <div>
      <NavLink to={"/"}>
        <button className={styles.BackButton}>Back</button>
      </NavLink>
    </div>
  );
};

export default BackButton;
