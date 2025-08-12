import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <div id="page">
        <div id="header-back"></div>
        <Portfolio />
        <div id="footer-back"></div>
      </div>
    </Router>
  );
}

export default App;
