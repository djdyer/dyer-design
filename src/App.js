import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";

import FlyAppDetail from "./components/pages/work-details/FlyAppDetail";
import ResponseMediaDetail from "./components/pages/work-details/ResponseMediaDetail";
import MySchoolDetail from "./components/pages/work-details/MySchoolDetail";
import MaterialsTraderDetail from "./components/pages/work-details/MaterialsTraderDetail";
import TechBrosDetail from "./components/pages/work-details/TechBrosDetail";
import PokeGoDetail from "./components/pages/work-details/PokeGoDetail";
import CodeQuizDetail from "./components/pages/work-details/CodeQuizDetail";
import RainorShineDetail from "./components/pages/work-details/RainorShineDetail";

function App() {
  return (
    <Router>
      <div id="page">
        <div id="header-back"></div>
        <Header />

        <div id="site-body">
          <Routes>
            <Route path="/" element={<Work />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/work/fly-app" element={<FlyAppDetail />} />
            <Route
              path="/work/response-media"
              element={<ResponseMediaDetail />}
            />
            <Route path="/work/my-school" element={<MySchoolDetail />} />
            <Route
              path="/work/materials-trader"
              element={<MaterialsTraderDetail />}
            />
            <Route path="/work/tech-bros-blog" element={<TechBrosDetail />} />
            <Route path="/work/poke-go" element={<PokeGoDetail />} />
            <Route path="/work/code-quiz" element={<CodeQuizDetail />} />
            <Route path="/work/rain-or-shine" element={<RainorShineDetail />} />
          </Routes>
        </div>

        <Footer />
        <div id="footer-back"></div>
      </div>
    </Router>
  );
}

export default App;
