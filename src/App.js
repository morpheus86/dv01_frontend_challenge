// useSelector hook let us access our state at anytime and we always get the latest state
import { useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const state = useSelector((state) => state.data.datas);
  console.log("state :>> ", state);
  return (
    <div className="App">
      <p>HELLO WORLD</p>
      <p>CHARTS AND GRAPHS</p>
    </div>
  );
};

export default App;
