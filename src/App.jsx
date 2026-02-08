import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";
import Noise from "./components/Noise";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <>
      <BrowserRouter>
        <SmoothScroll>
          <CustomCursor />
          <Noise />
          <AnimatedRoutes />
        </SmoothScroll>
      </BrowserRouter>
    </>
  );
}
