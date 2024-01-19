// useSelector hook let us access our state at anytime and we always get the latest state
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getAllDatas } from "./store/dataSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDatas());
  }, [dispatch]);

  return (
    <div className="App">
      <p>HELLO WORLD</p>
      <p>CHARTS AND GRAPHS</p>
    </div>
  );
};

export default App;
