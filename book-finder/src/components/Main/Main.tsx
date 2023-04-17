import styles from "./Main.module.scss";

const Main = () => {
  return (
    <>
      <section className={styles.main__container}>
        <div className={styles.mainLogo}>
          <h1>Blossom Books</h1>
        </div>
      </section>
    </>
  );
};

export default Main;
