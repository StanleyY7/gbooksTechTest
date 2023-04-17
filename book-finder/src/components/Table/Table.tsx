import BookList from "../BookList/BookList";
import styles from "./Table.module.scss";

const Table = () => {
  return (
    <>
      <section className={styles.Table__wrapper}>
        <div className={styles.Table__container}>
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
      </section>
    </>
  );
};

export default Table;
