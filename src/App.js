import "./App.css";
import logo from "./images/logo.png";
import Apartments from "./components/Apartments";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="" />
      </header>
      <Apartments />
    </div>
  );
}

export default App;
