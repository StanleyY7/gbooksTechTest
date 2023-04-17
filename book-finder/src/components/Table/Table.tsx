import { useEffect } from "react";
import styles from "./Table.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../Redux/GlobalSlice";

const Table = () => {
  const dispatch = useDispatch();

  const fetchBooks = async () => {
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=flowers&maxResults=30"
    );
    const bookData = await response.json();
    console.log(bookData.items);
    dispatch(setData(bookData.items));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const books = useSelector((state: any) => {
    console.log(state.global.data);
    return state.global.data;
  });

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
              {books &&
                books.map((book: any) => (
                  <tr key={book.id}>
                    <td>{book.volumeInfo.title}</td>
                    <td>
                      {book.volumeInfo.authors
                        ? book.volumeInfo.authors.join(", ")
                        : "Unknown"}
                    </td>
                    <td>{book.volumeInfo.publishedDate}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Table;
