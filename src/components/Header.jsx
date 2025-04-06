"use client"
import { useState, useEffect } from "react"
import { ChevronDown, Menu, X, Phone, Mail, Youtube, FileText, Calendar, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import Helmet from "react-helmet"

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const menuItems = [
    {
      title: "HOME",
      path: "/",
      submenus: [
        
      ],
    },
    {
      title: "SERVICES",
      path: "/",
      submenus: [
        {
          title: "Services",
          path: "/Services",
          items: ["Passport"],
        },
        
      ],
    },
    {
      title: "WEB SERVICES",
      path: "#",
      submenus: [
        {
          title: "Weborium",
          path: "/WEBORIUM",
          items: ["Weborium"],
        },
      ],
    },
    {
      title: "REGISTRATIONS",
      path: "#",
      submenus: [
        {
          title: "Company Registration",
          path: "/registrations/company",
          items: [
            "Proprietorship Firm",
            "Partnership Firm",
            "PVT LTD Registration",
            "OPC Registration",
            "LLP Registration",
            "Startup India Registration",
            "Society Registration",
            "Udyam (MSME) Registration",
            "Labour License",
            "GHMC Trade License",
            "Municipal Trade License",
            "ISO Registration",
            "IEC Code Registration",
            "ESI Registration",
            "PF Registration",
          ],
        },
      ],
    },
    {
      title: "FOOD LICENSE",
      path: "#",
      submenus: [
        {
          title: "FSSAI License",
          path: "/food-license/fssai",
          items: ["Food License Registration", "Food State License", "Food Central License"],
        },
      ],
    },
    {
      title: "TRADEMARK",
      path: "#",
      submenus: [
        {
          title: "Trademark Services",
          path: "/trademark/services",
          items: ["TradeMark Registration", "TradeMark Renewal", "Trademark Opposition", "Trademark Objection"],
        },
      ],
    },
    {
      title: "GST",
      path: "#",
      alignCenter: true, 
      submenus: [
        {
          title: "GST Services",
          path: "/gst/services",
          items: ["GST Registration", "GST Return Filing", "GST Modifications"],
        },
      ],
    },
    {
      title: "TAX",
      path: "#",
      alignCenter: true,
      submenus: [
        {
          title: "Tax Services",
          path: "/tax-compliances/services",
          items: ["Income Tax Filing", "Income Tax Audit", "Professional Tax Registration"],
        },
      ],
    },
    {
      title: "Our Profile",
      path: "#",
      alignCenter: true, // Add this property to center align the dropdown
      submenus: [{ title: "Our_Profile", path: "/our_profile", items: ["AboutUsPage", "            ", "Contact Us"] }],
    },
  ]

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}
    >
            <Helmet>
        <title>Fortune Multi Services | One-Stop Business & Digital Solutions</title>
        <meta
          name="description"
          content="Welcome to Fortune Multi Services – your trusted partner for company registration, tax filing, digital services, and more across India."
        />
        <meta
          name="keywords"
          content="Fortune Multi Services, business registration, GST, tax filing, digital marketing, FSSAI, ISO, trademark"
        />
        <meta name="author" content="Fortune Multi Services" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Fortune Multi Services | Business & Digital Solutions" />
        <meta property="og:description" content="Start and grow your business with Fortune Multi Services – registration, tax, legal & digital help in one place." />
        <meta property="og:image" content="https://fortunemultiservices.in/assets/home-preview.png" />
        <meta property="og:url" content="https://fortunemultiservices.in/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fortune Multi Services" />
        <meta name="twitter:description" content="We offer business registration, legal, financial, and digital services under one roof." />
        <meta name="twitter:image" content="https://fortunemultiservices.in/assets/home-preview.png" />

        <link rel="canonical" href="https://fortunemultiservices.in/" />
      </Helmet>
      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-800 to-blue-700 text-white py-2 px-3 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-2 md:mb-0">
            <a href="tel:+918919051513" className="flex items-center gap-2 hover:text-blue-200 transition-colors group">
              <div className="bg-white/20 rounded-full p-1.5 group-hover:bg-white/30 transition-colors">
                <Phone size={14} className="text-white" />
              </div>
              <span className="font-medium">+91 8919051513</span>
            </a>
            <a
              href="mailto:fortunemultiservices2023@gmail.com"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors group"
            >
              <div className="bg-white/20 rounded-full p-1.5 group-hover:bg-white/30 transition-colors">
                <Mail size={14} className="text-white" />
              </div>
              <span className="font-medium">fortunemultiservices2023@gmail.com</span>
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <a
              href="#"
              className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-all transform hover:scale-110 hover:rotate-6"
            >
              <Youtube size={16} />
              <span className="sr-only">YouTube</span>
            </a>
            <a
              href="/our_profile/aboutuspage"
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-all transform hover:scale-110 hover:-rotate-6"
            >
              <FileText size={16} />
              <span className="sr-only">Blog</span>
            </a>
            <Link
              to="/our_profile/contact-us"
              className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-4 py-1.5 rounded-md font-medium transition-all transform hover:scale-105 flex items-center gap-1.5 shadow-md"
            >
              <Calendar size={16} />
              <span>Book Now</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`bg-white py-3 px-4 md:px-8 transition-all duration-300 ${scrolled ? "py-2" : ""}`}>
        <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center relative z-10 group">
    <img 
        src="/FMS-final.png" 
        alt="Fortune Multi Services Logo" 
        className="h-14 w-auto transition-transform group-hover:scale-105"
    />
</Link>


          <button
            className="md:hidden bg-blue-50 p-2 rounded-md text-blue-800 hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav
            className={`
            fixed md:relative top-0 right-0 h-full md:h-auto w-[85%] md:w-auto 
            bg-white md:bg-transparent z-50 md:z-auto
            transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0
            transition-transform duration-300 ease-in-out
            flex flex-col md:flex-row items-start md:items-center
            pt-20 md:pt-0 px-6 md:px-0 shadow-xl md:shadow-none
            overflow-y-auto md:overflow-visible
          `}
          >
            {/* Close button for mobile */}
            <button
              className="absolute top-4 right-4 md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>

            {/* Logo in mobile menu */}
            <div className="absolute top-6 left-6 md:hidden">
              <span className="text-xl font-bold text-blue-800">Fortune </span>
              <span className="block text-sm text-blue-600">Multi Services</span>
            </div>

            {menuItems.map((menu, index) => (
              <div
                key={index}
                className="relative group w-full md:w-auto"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={menu.path}
                  className={`
                    flex items-center justify-between md:justify-center gap-1 
                    py-3 md:py-2 px-3 md:px-3 
                    text-gray-800 hover:text-blue-700 
                    font-medium text-sm md:text-xs lg:text-sm 
                    border-b md:border-b-0 border-gray-100 
                    w-full md:w-auto
                    transition-colors duration-200
                    ${activeDropdown === index ? "text-blue-700 md:text-blue-700" : ""}
                  `}
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      handleDropdownToggle(index)
                    } else {
                      setIsMobileMenuOpen(false)
                    }
                  }}
                >
                  {menu.title}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${activeDropdown === index ? "rotate-180" : ""}`}
                  />
                </Link>

                {activeDropdown === index && (
                  <div
                    className={`
                    md:absolute md:top-full ${menu.alignCenter ? "md:left-1/2 md:-translate-x-1/2" : "md:left-0"} md:mt-0.5
                    bg-white md:min-w-[280px] lg:min-w-[320px] 
                    md:shadow-lg md:rounded-lg overflow-hidden
                    border-l-2 md:border-l-0 md:border-t-2 border-blue-600
                    z-20 md:animate-fadeIn
                  `}
                  >
                    {menu.submenus.map((submenu, subIndex) => (
                      <div
                        key={subIndex}
                        className="p-4 border-b border-gray-100 hover:bg-blue-50/50 transition-colors"
                      >
                        <Link
                          to={submenu.path}
                          className="block text-blue-800 font-semibold mb-3 hover:text-blue-600 transition-colors flex items-center justify-between"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {submenu.title}
                          <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {submenu.items.map((item, itemIndex) =>
                            item.trim() ? (
                              <Link
                                key={itemIndex}
                                to={`${submenu.path}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                className="text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-1.5 px-2 rounded transition-colors flex items-center gap-1 group"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-200 group-hover:bg-blue-400 transition-colors"></span>
                                {item}
                              </Link>
                            ) : null,
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile-only Book Now button */}
            <div className="mt-6 w-full md:hidden">
              <Link
                to="/our_profile/contact-us"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-md font-medium w-full block text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Spacer for fixed header */}
      <div className={`h-[${scrolled ? "70px" : "80px"}] md:h-[${scrolled ? "80px" : "90px"}]`}></div>
    </header>
  )
}

export default Header

