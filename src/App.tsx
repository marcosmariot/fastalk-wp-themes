import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Homepage from './pages/Homepage';
import FastalkWeb from './pages/FastalkWeb';
import FastalkCRM from './pages/FastalkCRM';
import Planos from './pages/Planos';
import Aprenda from './pages/Aprenda';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/fastalk-web" element={<FastalkWeb />} />
            <Route path="/fastalk-crm" element={<FastalkCRM />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/aprenda" element={<Aprenda />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;