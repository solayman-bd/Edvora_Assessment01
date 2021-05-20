import "./App.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import DataSet from "./components/DataSet/DataSet";
import HomePage from "./components/HomePage/HomePage/HomePage";

function App() {
  return (
    <Provider store={store}>
      <DataSet></DataSet>
      <HomePage></HomePage>
    </Provider>
  );
}

export default App;
