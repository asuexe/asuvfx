import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Home } from "./pages/index";

function App() {
  return (
    <Router>
      <div className="relative w-screen min-h-screen bg-black overflow-x-hidden scrollbar-hide pt-16">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
