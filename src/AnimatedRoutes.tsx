import { AnimatePresence } from "framer-motion";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Judy from "./pages/judy/Judy";
import Wishes from "./pages/wishes/Wishes";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/judy" element={<Judy />} />
        <Route path="/wishes" element={<Navigate to="/wishes/0" replace />} />
        <Route path="/wishes/:id" element={<Wishes />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
