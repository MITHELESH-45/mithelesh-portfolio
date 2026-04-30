import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { NAV_LINKS } from '../../data';
import { Menu, X } from 'lucide-react';
import { cn } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-none",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 pointer-events-auto">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-6 py-4 transition-all duration-300",
            isScrolled ? "glass shadow-neon" : "bg-transparent"
          )}
        >
          <Link
            to="home"
            smooth={true}
            className="text-2xl font-mono font-bold tracking-tighter text-glow cursor-pointer text-white"
          >
            MITHELESH<span className="text-primary">.</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  activeClass="text-primary text-shadow-sm font-medium"
                  className="text-white/70 hover:text-white transition-colors cursor-pointer text-sm tracking-wide uppercase"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-6 right-6 mt-2 glass rounded-2xl p-4 md:hidden pointer-events-auto">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white/80 p-2 hover:bg-white/10 rounded-lg cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
