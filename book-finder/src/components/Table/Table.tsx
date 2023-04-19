import BookList from "../BookList/BookList";
import Sort from "../Sort/Sort";
import styles from "./Table.module.scss";

const Table = () => {
  return (
    <>
      <section className={styles.Table__wrapper}>
        <div className={styles.Table__container}>
          <Sort />
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Authors</th>
                <th>Published Date</th>
              </tr>
            </thead>
            <tbody>
              <BookList />
            </tbody>
          </table>
        </div>
        <br />
        <br />
        <br />
      </section>
    </>
  );
};

export default Table;
