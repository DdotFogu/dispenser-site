import { Routes, Route } from "react-router";
import Landing from "./pages/Landing.tsx";
import About from "./pages/About.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
