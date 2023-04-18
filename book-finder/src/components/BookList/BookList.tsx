import { useSelector, useDispatch } from "react-redux";
import { setData, setSelectBook, setSortOrder } from "../Redux/GlobalSlice";
import { fetchBooks } from "../../services/books";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./BookList.module.scss";

const BookList: any = () => {
  const selectedBook = useSelector((state: any) => state.global.selectBook);
  const dispatch = useDispatch();

  const sortOrder = useSelector((state: any) => state.global.sortOrder);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      const sortedData = data.slice().sort((a: any, b: any) => {
        if (sortOrder === "title") {
          return a.volumeInfo.title.localeCompare(b.volumeInfo.title);
        } else if (sortOrder === "authors") {
          const authorA = a.volumeInfo.authors ? a.volumeInfo.authors[0] : "";
          const authorB = b.volumeInfo.authors ? b.volumeInfo.authors[0] : "";
          return authorA.localeCompare(authorB);
        } else if (sortOrder === "publishedDate") {
          const dateA = a.volumeInfo.publishedDate
            ? a.volumeInfo.publishedDate
            : "";
          const dateB = b.volumeInfo.publishedDate
            ? b.volumeInfo.publishedDate
            : "";
          return dateA.localeCompare(dateB);
        } else {
          return 0;
        }
      });
      dispatch(setData(sortedData));
      dispatch(setSortOrder(sortOrder));
    };
    fetchData();
  }, [sortOrder]);

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
