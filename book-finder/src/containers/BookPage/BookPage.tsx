import BackButton from "../../components/BackButton/BackButton";
import BookCard from "../../components/BookCard/BookCard";
import { NavLink } from "react-router-dom";

const BookPage = () => {
  return (
    <>
      <NavLink to="/displayAll">
        <BackButton />
      </NavLink>

      <BookCard />
    </>
  );
};

export default BookPage;
