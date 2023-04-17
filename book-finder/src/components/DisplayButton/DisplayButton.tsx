import styles from "./DisplayButton.module.scss";
import { NavLink } from "react-router-dom";

const DisplayButton = () => {
  return (
    <>
      <section className={styles.DisplayButton__wrapper}>
        <div className={styles.DisplayButton__container}>
          <NavLink to={"/displayAll"}>
            <button className={styles.DisplayButton}>Display All</button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default DisplayButton;
