// useSelector hook let us access our state at anytime and we always get the latest state
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getAllDatas } from "./store/dataSlice";
import TableContent from "./components/TableData/TableContent";
import DropDownFilter from "./components/TableData/DropDownFilter";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDatas());
  }, [dispatch]);

  return (
    <div className="container">
      <p>Table</p>
      <TableContent />
      <DropDownFilter />
      <p>CHARTS AND GRAPHS</p>
    </div>
  );
};

export default App;
