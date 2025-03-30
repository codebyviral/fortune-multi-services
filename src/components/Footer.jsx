import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaPhone, FaMapMarkerAlt, FaChevronLeft, FaChevronRight, FaGoogle, FaStar } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white pt-16 pb-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-purple-500 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Start A Business */}
          <div className="transform hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-blue-500 inline-block">Start A Business</h3>
            <ul className="space-y-3">
              {['Solo Proprietor Firm', 'Partnership Firm', 'Private Limited Company', 'LLP Registration', 'OPC Registration'].map((item, index) => (
                <li key={index} className="flex items-center group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* License */}
          <div className="transform hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-green-500 inline-block">License</h3>
            <ul className="space-y-3">
              {['Food FSSAI License', 'Trade License', 'IEC Registration', 'Labour License', 'Drug License'].map((item, index) => (
                <li key={index} className="flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Registrations */}
          <div className="transform hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-purple-500 inline-block">Registrations</h3>
            <ul className="space-y-3">
              {['TradeMark registration', 'Society Registration', 'ESI registration', 'MSME Registration', 'PF Registration'].map((item, index) => (
                <li key={index} className="flex items-center group">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Goods & services Tax */}
          <div className="transform hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-orange-500 inline-block">Goods & Services Tax</h3>
            <ul className="space-y-3">
              {['GST Registration', 'GST Returns Filing', 'GST Modification', 'GST Cancelation', 'GST E-Way Bills'].map((item, index) => (
                <li key={index} className="flex items-center group">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8 opacity-50"></div>

        {/* Company Info and Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-lg mr-3">
                FMS
              </span>
              FORTUNE MULTI SERVICES
            </h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
            Fortune Multi Services is your trusted partner for business registrations and
              licenses. Our experts simplify the process, ensuring accuracy and peace of mind.
              From sole proprietorships to private limited companies, we've got you covered.
              Let's build your business together!
            </p>

            {/* Social Media */}
            <div className="flex space-x-4 mb-8">
              {[
                { icon: <FaFacebook className="text-xl" />, color: 'bg-blue-600' },
                { icon: <FaTwitter className="text-xl" />, color: 'bg-blue-400' },
                { icon: <FaLinkedin className="text-xl" />, color: 'bg-blue-700' },
                { icon: <FaInstagram className="text-xl" />, color: 'bg-gradient-to-r from-purple-600 to-pink-600' },
                { icon: <FaYoutube className="text-xl" />, color: 'bg-red-600' }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className={`${social.color} text-white rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-xl`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Locations */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Kukatpally Office</h4>
                  <p className="text-gray-300 text-sm">
                    Office No 2, 2nd Floor, opp Metro Pillar No 875, Moosapet, Kukatpally, Hyderabad - 500018.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-2xl font-bold mb-6">What Our Clients Say</h3>
            <div className="bg-gray-800 rounded-xl p-6 shadow-xl relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-500 opacity-10 blur-xl"></div>
              
              {/* Google Review Header */}
              <div className="flex items-center mb-6 z-10 relative">
                <div className="bg-white p-2 rounded-lg mr-4 shadow">
                  <FaGoogle className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <div className="text-sm font-medium">FORTUNE MULTI SERVICES</div>
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-400 font-bold mr-2">4.9</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Based on 63 reviews</div>
                </div>
                <button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 text-xs font-medium transition-colors">
                  Write a Review
                </button>
              </div>

              {/* Review Navigation */}
              <div className="flex justify-between items-center mb-4">
                <button className="bg-gray-700 hover:bg-gray-600 rounded-full w-8 h-8 flex items-center justify-center transition-colors">
                  <FaChevronLeft className="text-sm" />
                </button>
                <div className="text-xs text-gray-400">1 of 5 reviews</div>
                <button className="bg-gray-700 hover:bg-gray-600 rounded-full w-8 h-8 flex items-center justify-center transition-colors">
                  <FaChevronRight className="text-sm" />
                </button>
              </div>

              {/* Individual Review */}
              <div className="bg-gray-900 rounded-lg p-5 relative z-10">
                <div className="flex items-start mb-3">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 shrink-0">
                    V
                  </div>
                  <div>
                    <div className="font-bold">Vishnu Jadi</div>
                    <div className="text-xs text-gray-400">9 months ago</div>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`text-sm ${i < 3 ? 'text-yellow-400' : 'text-gray-600'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  "Providing all Company Registrations, I have completed my private limited here. Excellent service and support throughout the process. Highly recommended for business registrations in Madhapur area."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Fortune Multi Services. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </div>

      {/* Floating Call Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
        <div className="relative">
          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full py-3 px-6 flex items-center shadow-xl hover:shadow-2xl transition-all">
            <FaPhone className="mr-2" />
            <span>Call Now</span>
          </button>
          <div className="absolute -right-1 -top-1">
            <div className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;