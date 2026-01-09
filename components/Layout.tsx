import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Calendar } from 'lucide-react';
import BookingModal from './BookingModal';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Startseite', path: '/' },
    { name: 'Wohngebäude', path: '/wohngebaeude' },
    { name: 'Nichtwohngebäude', path: '/nichtwohngebaeude' },
    { name: 'Energieausweise', path: '/energieausweise' },
    { name: 'Baubegleitung', path: '/baubegleitung' },
    { name: 'Über Uns', path: '/ueber-uns' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);
  const openBooking = () => {
    setIsMobileMenuOpen(false);
    setIsBookingOpen(true);
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      
      {/* Top Bar - Desktop Only */}
      <div className="hidden md:block bg-slate-900 text-gray-300 py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2"><MapPin size={14} /> Heidelberg-Kirchheim</span>
            <span className="flex items-center gap-2"><Mail size={14} /> info@heidelberger-energieberater.de</span>
          </div>
          <div className="flex items-center font-medium text-emerald-400">
            <Phone size={14} className="mr-2" /> 06221 782020
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col leading-none" onClick={closeMenu} aria-label="Zur Startseite">
              <span className="text-xl font-bold text-slate-900 tracking-tight">HEIDELBERGER</span>
              <span className="text-emerald-600 font-semibold text-lg">ENERGIEBERATER</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 focus-visible:text-emerald-600 ${
                    isActive(link.path) ? 'text-emerald-600 font-bold' : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={openBooking}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Calendar size={16} /> Erstberatung
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-slate-900 p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl z-40">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-6 py-3 text-base font-medium border-l-4 ${
                    isActive(link.path)
                      ? 'border-emerald-600 text-emerald-700 bg-emerald-50'
                      : 'border-transparent text-slate-700 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex gap-2">
        <a 
          href="tel:06221782020" 
          className="flex-1 bg-slate-900 text-white flex items-center justify-center py-3 rounded font-semibold text-sm"
        >
          <Phone size={18} className="mr-2" /> Anrufen
        </a>
        <button 
          onClick={openBooking}
          className="flex-1 bg-emerald-600 text-white flex items-center justify-center py-3 rounded font-semibold text-sm"
        >
          <Calendar size={18} className="mr-2" /> Termin
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-12 pb-24 md:pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-emerald-400">HEIDELBERGER<br/>ENERGIEBERATER GbR</h3>
              <address className="not-italic text-gray-400 leading-relaxed">
                Schwetzinger Straße 51<br />
                69124 Heidelberg-Kirchheim<br />
                Deutschland
              </address>
              <div className="mt-4 space-y-2">
                <a href="tel:06221782020" className="flex items-center text-white hover:text-emerald-400 transition-colors">
                  <Phone size={16} className="mr-2" /> 06221 782020
                </a>
                <a href="mailto:info@heidelberger-energieberater.de" className="flex items-center text-white hover:text-emerald-400 transition-colors">
                  <Mail size={16} className="mr-2" /> info@heidelberger-energieberater.de
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Leistungen</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/wohngebaeude" className="hover:text-emerald-400 transition-colors flex items-center"><ChevronRight size={14} className="mr-1"/> Energieberatung Wohngebäude</Link></li>
                <li><Link to="/nichtwohngebaeude" className="hover:text-emerald-400 transition-colors flex items-center"><ChevronRight size={14} className="mr-1"/> DIN 18599 Nichtwohngebäude</Link></li>
                <li><Link to="/energieausweise" className="hover:text-emerald-400 transition-colors flex items-center"><ChevronRight size={14} className="mr-1"/> Energieausweise</Link></li>
                <li><Link to="/baubegleitung" className="hover:text-emerald-400 transition-colors flex items-center"><ChevronRight size={14} className="mr-1"/> Baubegleitung & Fördermittel</Link></li>
              </ul>
            </div>

            {/* Legal / Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Rechtliches & Zeiten</h4>
              <ul className="space-y-2 text-gray-400 mb-4">
                <li><Link to="/kontakt" className="hover:text-emerald-400 transition-colors">Kontakt & Anfahrt</Link></li>
                <li><Link to="/" className="hover:text-emerald-400 transition-colors">Impressum</Link></li>
                <li><Link to="/" className="hover:text-emerald-400 transition-colors">Datenschutz</Link></li>
              </ul>
              <p className="text-sm text-gray-500">
                Erreichbar: Mo-Fr 08:00 - 18:00 Uhr<br/>
                Telefonische Erstberatung kostenlos.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Heidelberger Energieberater GbR. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;