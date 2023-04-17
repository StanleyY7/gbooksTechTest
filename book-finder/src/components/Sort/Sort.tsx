import styles from "./Sort.module.scss";
import { setSortOrder } from "../Redux/GlobalSlice";
import { useDispatch } from "react-redux";
const Sort = () => {
  const dispatch = useDispatch();
  const handleSortChange = (event: any) => {
    const sortOrder = event.target.value;
    dispatch(setSortOrder(sortOrder));
  };
  return (
    <>
      <div className={styles.Sort__wrapper}>
        <p className={styles.Sort}> Sort By: </p>
        <select onChange={handleSortChange}>
          <option value="">None</option>
          <option value="title">Title</option>
          <option value="authors">Author</option>
          <option value="publishedDate">Date</option>
        </select>
      </div>
    </>
  );
};

export default Sort;
