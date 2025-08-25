import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Nosotros from "./components/pages/Nosotros";
import Servicios from "./components/pages/Servicios";
import Portafolio from "./components/pages/Portafolio";
import Contacto from "./components/pages/Contacto";
import WhatsAppButton from "./components/ui/whatssapButton";

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      {/* Se quita el padding de aquí para que el contenido fluya por debajo */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  );
}

export default App;
