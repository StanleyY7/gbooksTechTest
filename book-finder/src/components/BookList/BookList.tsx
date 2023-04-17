import { useSelector, useDispatch } from "react-redux";
import { setData, setSelectBook } from "../Redux/GlobalSlice";
import { fetchBooks } from "../../services/books";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./BookList.module.scss";

const BookList = () => {
  const selectedBook = useSelector((state: any) => state.global.selectBook);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const bookData = await fetchBooks();
      dispatch(setData(bookData));
    };
    getData();
  }, []);

  const books = useSelector((state: any) => state.global.data);
  return (
    <>
      {books &&
        books.map((book: any) => (
          <tr
            key={book.id}
            onClick={() => {
              dispatch(setSelectBook(book));
              console.log(selectedBook);
            }}
          >
            <NavLink to="/book" className={styles.bookTitle}>
              <td>{book.volumeInfo.title}</td>
            </NavLink>
            <td>
              {book.volumeInfo.authors
                ? book.volumeInfo.authors.join(", ")
                : "Unknown"}
            </td>
            <td>{book.volumeInfo.publishedDate}</td>
          </tr>
        ))}
    </>
  );
};

export default BookList;
