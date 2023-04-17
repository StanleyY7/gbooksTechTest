import styles from "./BookCard.module.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const BookCard = () => {
  const book = useSelector((state: any) => state.global.selectBook);
  return (
    <>
      <section className={styles.BookCard__wrapper}>
        <h1>{book.volumeInfo.title}</h1>
        <div className={styles.image__container}>
          <img src={book.volumeInfo.imageLinks.thumbnail} />
        </div>
        <div className={styles.BookCard__textContent}>
          <p>
            By {book.volumeInfo.authors ? book.volumeInfo.authors : "Unknown"},
            Pages: {book.volumeInfo.pageCount}
          </p>
          <NavLink
            className={styles.previewLink}
            to={book.volumeInfo.previewLink}
            target="_blank"
          >
            Preview
          </NavLink>
          <div>
            <br />
          </div>

          <div className={styles.description__wrapper}>
            <p>
              {book.volumeInfo.description
                ? book.volumeInfo.description
                : "No description :("}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookCard;
