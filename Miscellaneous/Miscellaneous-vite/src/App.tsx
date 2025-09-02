import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Info from "./pages/Info";
import Counting from "./pages/Counting";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/info" element={<Info />} />
      <Route path="/counting" element={<Counting />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
