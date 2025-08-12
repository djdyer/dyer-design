// Portfolio.js
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import About from "./pages/About";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./Footer";

import FlyAppDetail from "./pages/work-details/FlyAppDetail";
import ResponseMediaDetail from "./pages/work-details/ResponseMediaDetail";
import MySchoolDetail from "./pages/work-details/MySchoolDetail";
import MaterialsTraderDetail from "./pages/work-details/MaterialsTraderDetail";
import TechBrosDetail from "./pages/work-details/TechBrosDetail";
import PokeGoDetail from "./pages/work-details/PokeGoDetail";
import CodeQuizDetail from "./pages/work-details/CodeQuizDetail";
import RainorShineDetail from "./pages/work-details/RainorShineDetail";

export default function Portfolio() {
  return (
    <div id="site-body">
      <Header />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />

        <Route path="/work/fly-app" element={<FlyAppDetail />} />
        <Route path="/work/response-media" element={<ResponseMediaDetail />} />
        <Route path="/work/my-school" element={<MySchoolDetail />} />
        <Route
          path="/work/materials-trader"
          element={<MaterialsTraderDetail />}
        />
        <Route path="/work/tech-bros-blog" element={<TechBrosDetail />} />
        <Route path="/work/poke-go" element={<PokeGoDetail />} />
        <Route path="/work/code-quiz" element={<CodeQuizDetail />} />
        <Route path="/work/rain-or-shine" element={<RainorShineDetail />} />

        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
