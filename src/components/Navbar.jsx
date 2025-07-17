import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Logo2 from '../assets/logo2.jpeg'; // Logo di kanan
import Logo3 from '../assets/logo3.jpeg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerTranslate = (lang) => {
    const fireTranslate = () => {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event('change'));
        return true;
      }
      return false;
    };

    if (!fireTranslate()) {
      const interval = setInterval(() => {
        if (fireTranslate()) clearInterval(interval);
      }, 200);
    }
  };

  const navItems = [
    { label: 'Beranda', path: '/' },
    {
      label: 'Tentang',
      submenu: [
        { label: 'Profil', path: '/tentang' },
        { label: 'Visi & Misi', path: '/visi-misi' },
      ],
    },
    {
      label: 'Program',
      submenu: [
        { label: 'Teknik Sepeda Motor', path: '/tsm' },
        { label: 'Desain dan Produk Busana', path: '/dpb' },
        { label: 'Ekstrakurikuler', path: '/ekstrakurikuler' },
      ],
    },
    { label: 'PPDB', path: '/ppdb' },
    { label: 'Berita', path: '/berita' },
    { label: 'Galeri', path: '/galeri' },
    { label: 'Kontak', path: '/kontak' },
  ];

  const textColor = scrolled ? 'text-blue-800' : 'text-white';
  const hoverColor = scrolled ? 'hover:text-blue-800' : 'hover:text-gray-200';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-md' : 'bg-transparent'
      }`}
    >
      <div
        className={`flex justify-between items-center px-6 md:px-12 lg:px-20 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-6 mt-12'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="h-14 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <nav
          className={`hidden md:flex space-x-6 text-[17px] font-semibold relative transition-all duration-300 ${textColor}`}
        >
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => {
                if (dropdownTimeout) clearTimeout(dropdownTimeout);
                setDropdownOpen(index);
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => {
                  setDropdownOpen(null);
                }, 200);
                setDropdownTimeout(timeout);
              }}
            >
              {item.submenu ? (
                <>
                  <button
                    className={`flex items-center gap-1 border-b-2 border-transparent ${hoverColor} ${textColor} transition-colors duration-300`}
                  >
                    {item.label}
                    <span
                      className={`transform transition-transform duration-300 text-sm ${
                        dropdownOpen === index ? 'rotate-180' : ''
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  <div
                    className={`absolute top-full left-0 mt-2 w-56 bg-white shadow-md rounded-md overflow-hidden transition-all duration-300 transform border-b-4 border-blue-700 ${
                      dropdownOpen === index
                        ? 'opacity-100 translate-y-0 visible'
                        : 'opacity-0 -translate-y-2 invisible pointer-events-none'
                    }`}
                  >
                    {item.submenu.map((sub, idx) => (
                      <Link
                        key={idx}
                        to={sub.path}
                        className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`border-b-2 border-transparent ${hoverColor} ${textColor} transition-colors duration-300`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <img src={Logo2} alt="EsemMu Logo 1" className="w-20 h-20 object-contain" />
          <img src={Logo3} alt="EsemMu Logo 2" className="w-20 h-20 object-contain" />
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
            <div className="space-y-1">
              {[1, 2, 3].map((_, i) => (
                <span
                  key={i}
                  className={`block w-6 h-0.5 transition-all duration-300 ${
                    scrolled ? 'bg-blue-800' : 'bg-white'
                  }`}
                ></span>
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 text-gray-700 font-medium space-y-3 shadow-md transition-all">
          {navItems.map((item, index) =>
            item.submenu ? (
              <div key={index}>
                <p className="font-semibold text-blue-800 mb-2">{item.label}</p>
                <ul className="pl-4 space-y-2">
                  {item.submenu.map((sub, idx) => (
                    <li key={idx}>
                      <Link
                        to={sub.path}
                        className="block hover:text-blue-600 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                key={index}
                to={item.path}
                className="block hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
