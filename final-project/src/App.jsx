import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/form" element={<FormPage />} />
        {/* Add more pages later */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
