import { BrowserRouter, Routes, Route } from "react-router";
import { ArticleProvider } from "./context/ArticleContext";
import Landing from "./pages/Landing.tsx";
import About from "./pages/About.tsx";

function App() {
  return (
    <BrowserRouter basename="/dispenser-site">
      <ArticleProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ArticleProvider>
    </BrowserRouter>
  );
}

export default App;
