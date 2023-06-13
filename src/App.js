import Nav from "./Components/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* We only have to call nav because this component will call the others */}
      <Nav />
    </div>
  );
}

export default App;
