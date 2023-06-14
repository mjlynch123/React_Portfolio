import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* We only have to call nav because this component will call the others */}
      <Header />
    </div>
  );
}

export default App;
