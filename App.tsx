import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Residential from './pages/Residential';
import NonResidential from './pages/NonResidential';
import Certificates from './pages/Certificates';
import Supervision from './pages/Supervision';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wohngebaeude" element={<Residential />} />
          <Route path="/nichtwohngebaeude" element={<NonResidential />} />
          <Route path="/energieausweise" element={<Certificates />} />
          <Route path="/baubegleitung" element={<Supervision />} />
          <Route path="/ueber-uns" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;