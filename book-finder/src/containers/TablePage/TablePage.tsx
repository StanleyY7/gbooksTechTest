import BackButton from "../../components/BackButton/BackButton";
import Table from "../../components/Table/Table";
import { NavLink } from "react-router-dom";

const TablePage = () => {
  return (
    <>
      <section>
        <NavLink to="/">
          <BackButton />
        </NavLink>
        <Table />
      </section>
    </>
  );
};

export default TablePage;
