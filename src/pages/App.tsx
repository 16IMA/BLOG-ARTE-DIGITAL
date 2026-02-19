import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer  from "../components/Footer";
import BlogPanel from "../components/BlogPanel";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";

function App() {
  return 
  (
    <BrowserRouter>
        <div className="app-container">
            <Header />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    {/* Ruta privada */}
                    <Route path="/admin-panel" element={<BlogPanel />} />
                </Routes>
            </main>
            <Footer/>
        </div>
    </BrowserRouter>
  );
}



export default App;
