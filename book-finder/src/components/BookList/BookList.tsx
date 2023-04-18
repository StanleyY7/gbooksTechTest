import { useSelector, useDispatch } from "react-redux";
import {
  setData,
  setSelectBook,
  setSortOrder,
  setSortedBooks,
} from "../Redux/GlobalSlice";
import { fetchBooks } from "../../services/books";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./BookList.module.scss";

const BookList = () => {
  const dispatch = useDispatch();

  const sortOrder = useSelector((state: any) => state.global.sortOrder);
  const books = useSelector((state: any) => state.global.data);
  const sortedBooks = useSelector((state: any) => state.global.sortedBooks);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      dispatch(setData(data));
    };

    fetchData();
  }, []);

  useEffect(() => {
    let sortFunc: any = () => console.log("unimplemented sort function");

    if (sortOrder === "title") {
      sortFunc = (a: any, b: any) =>
        a.volumeInfo.title.localeCompare(b.volumeInfo.title);
    } else if (sortOrder === "authors") {
      sortFunc = (a: any, b: any) => {
        const authorA = a.volumeInfo.authors ? a.volumeInfo.authors[0] : "";
        const authorB = b.volumeInfo.authors ? b.volumeInfo.authors[0] : "";
        return authorA.localeCompare(authorB);
      };
    } else if (sortOrder === "publishedDate") {
      sortFunc = (a: any, b: any) => {
        const dateA = a.volumeInfo.publishedDate
          ? a.volumeInfo.publishedDate
          : "";
        const dateB = b.volumeInfo.publishedDate
          ? b.volumeInfo.publishedDate
          : "";
        return dateA.localeCompare(dateB);
      };
    }

    dispatch(setSortedBooks([...books].sort(sortFunc)));
    dispatch(setSortOrder(sortOrder));
  }, [sortOrder, books]);

  return (
    <>
      {sortedBooks &&
        sortedBooks.map((book: any) => (
          <tr
            key={book.id}
            onClick={() => {
              dispatch(setSelectBook(book));
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
