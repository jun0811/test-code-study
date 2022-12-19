import logo from "./logo.svg";
import "./App.css";
import { Profile } from "./Profile";
import Counter from "Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <Profile username="lsj" name="이승준" />
    </div>
  );
}

export default App;
