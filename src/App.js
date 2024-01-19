// useSelector hook let us access our state at anytime and we always get the latest state
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getAllDatas } from "./store/dataSlice";
import TableContent from "./components/TableData/TableContent";
import DropDownFilter from "./components/TableData/DropDownFilter";
import TableChart from "./components/chart/TableChart";

const App = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.UI.notifications);
  useEffect(() => {
    dispatch(getAllDatas());
  }, [dispatch]);

  return (
    <div className="container">
      {notifications && notifications.title === "Loading" && (
        <div className="loading">
          <p className=".loading-circle ">{notifications.message}</p>
        </div>
      )}
      <p>Table</p>
      <TableContent />
      <DropDownFilter />
      <p>CHARTS AND GRAPHS</p>
      <TableChart />
    </div>
  );
};

export default App;
