import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Error";
import Header from "../component/home/Header";
import Footer from "../component/home/Footer";
import Home from "./Home";
import Info from "./info/Info";
import Projects from "./projects/Projects";
import Skils from "./skils/Skils";

export default function Router() {
  return (
    <BrowserRouter>
      <Header title="미노미" stMenu="Who?" seMenu="Skils" thMenu="Projects" />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="info" element={<Info />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="skils" element={<Skils />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
