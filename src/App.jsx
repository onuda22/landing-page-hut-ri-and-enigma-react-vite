import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Section from "./components/Section";

function App() {
  return (
    <div className="container">
      {/* <div> */}
      <Header />
      <main>
        <Home />
        {/* <Section /> */}
      </main>
      {/* </div> */}
    </div>
  );
}

export default App;
