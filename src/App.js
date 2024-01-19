// useSelector hook let us access our state at anytime and we always get the latest state
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getAllDatas } from "./store/dataSlice";
import TableContent from "./components/TableData/TableContent";

const App = () => {
  const dispatch = useDispatch();
  const sata = useSelector((state) => state.UI.notifications);
  console.log("sata :>> ", sata);
  useEffect(() => {
    dispatch(getAllDatas());
  }, [dispatch]);

  return (
    <div className="container">
      <p>Table</p>
      <TableContent />

      <p>CHARTS AND GRAPHS</p>
    </div>
  );
};

export default App;
