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
import { useNavigate } from "react-router-dom";
import styles from "./BookList.module.scss";
import { Books, State, sortFunction } from "../../types/types";

const BookList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sortOrder = useSelector((state: State) => state.global.sortOrder);
  const books = useSelector((state: State) => state.global.data);
  const sortedBooks = useSelector((state: State) => state.global.sortedBooks);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      dispatch(setData(data));
    };

    fetchData();
  }, []);

  useEffect(() => {
    let sortFunc: sortFunction = () => 0;

    if (sortOrder === "title") {
      sortFunc = (a: Books, b: Books) =>
        a.volumeInfo.title.localeCompare(b.volumeInfo.title);
    } else if (sortOrder === "authors") {
      sortFunc = (a: Books, b: Books) => {
        const authorA = a.volumeInfo.authors ? a.volumeInfo.authors[0] : "";
        const authorB = b.volumeInfo.authors ? b.volumeInfo.authors[0] : "";
        return authorA.localeCompare(authorB);
      };
    } else if (sortOrder === "publishedDate") {
      sortFunc = (a: Books, b: Books) => {
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
        sortedBooks.map((book: Books) => (
          <tr
            key={book.id}
            onClick={() => {
              dispatch(setSelectBook(book));
            }}
          >
            <td
              className={styles.bookTitle}
              onClick={() => {
                navigate("/book");
              }}
            >
              {book.volumeInfo.title}
            </td>

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
