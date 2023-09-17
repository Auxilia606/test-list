import "./App.css";
import { Header, List } from "./components";
import MyContextProvider from "./contexts/MyContextProvider";

const App = () => {
  return (
    <div className="App">
      <MyContextProvider>
        <Header />
        <List />
      </MyContextProvider>
    </div>
  );
};

export default App;
