import styles from "./Main.module.scss";
import flower from "../../assets/flower.svg";

const Main = () => {
  return (
    <>
      <section className={styles.main__container}>
        <div className={styles.mainLogo}>
          <h1>Blossom Books</h1>
        </div>
      </section>
      <img src={flower} className={styles.flower} />
      <div className={styles.banner}></div>
    </>
  );
};

export default Main;
