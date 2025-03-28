// components/Header.jsx
import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      title: 'REGISTRATIONS',
      path: '/registrations',
      submenus: [
        { title: 'Company Registration', path: '/registrations/company', items: ['Proprietorship Firm', 'Partnership Firm', 'PVT LTD Registration', 'OPC Registration', 'LLP Registration', 'Startup Registration', 'Society Registration', 'Udyam Registration'] },
        { title: 'Govt Registrations', path: '/registrations/government', items: ['Labour License', 'GHMC Trade License', 'Municipal Trade License', 'ISO Registration', 'IEC Code Registration', 'ESI Registration', 'PF Registration'] }
      ]
    },
    {
      title: 'FOOD LICENSE',
      path: '/food-license',
      submenus: [{ title: 'FSSAI License', path: '/food-license/fssai', items: ['Food License Registration', 'Food State License', 'Food Central License'] }]
    },
    {
      title: 'TRADEMARK',
      path: '/trademark',
      submenus: [{ title: 'Trademark Services', path: '/trademark/services', items: ['TradeMark Registration', 'TradeMark Renewal', 'Trademark Opposition', 'Trademark Objection'] }]
    },
    {
      title: 'GST',
      path: '/gst',
      submenus: [{ title: 'GST Services', path: '/gst/services', items: ['GST Registration', 'GST Return Filing', 'GST Modifications'] }]
    },
    {
      title: 'TAX',
      path: '/tax-compliances',
      submenus: [{ title: 'Tax Services', path: '/tax-compliances/services', items: ['Income Tax Filing', 'Income Tax Audit', 'Professional Tax Registration'] }]
    }
  ];

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-contact">
          <span className="contact-item">
            <span className="contact-icon">📞</span> +91 8919051513
          </span>
          <span className="contact-item">
            <span className="contact-icon">✉️</span> fortunemultiservices2023@gmail.com
          </span>
        </div>
        <div className="header-buttons">
          <a href="#" className="btn btn-youtube">▶️</a>
          <a href="#" className="btn btn-blog">📝</a>
          <Link to="/book" className="btn btn-service">Book Now</Link>
        </div>
      </div>

      <div className="header-main">
        <Link to="/" className="logo">
          <span className="logo-main">INVENTION</span>
          <span className="logo-sub">Business Solutions</span>
        </Link>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          {menuItems.map((menu, index) => (
            <div 
              key={index} 
              className="nav-item"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to={menu.path} className="nav-link">
                {menu.title}
                <ChevronDown 
                  size={16} 
                  className={`nav-chevron ${activeDropdown === index ? 'rotate' : ''}`} 
                />
              </Link>
              {activeDropdown === index && (
                <div className="dropdown">
                  {menu.submenus.map((submenu, subIndex) => (
                    <div key={subIndex} className="dropdown-section">
                      <Link to={submenu.path} className="dropdown-title">
                        {submenu.title}
                      </Link>
                      <div className="dropdown-grid">
                        {submenu.items.map((item, itemIndex) => (
                          <Link 
                            key={itemIndex} 
                            to={`${submenu.path}/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                            className="dropdown-item"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;