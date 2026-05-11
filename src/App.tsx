import { Routes, Route } from "react-router";
import { ArticleProvider } from "./context/ArticleContext";
import Landing from "./pages/Landing.tsx";

function App() {
  return (
    <ArticleProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </ArticleProvider>
  );
}

export default App;
