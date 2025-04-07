import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaPhone, FaMapMarkerAlt, FaChevronLeft, FaChevronRight, FaGoogle, FaStar, FaRegEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import { useEffect } from 'react';
const Footer = () => {
  const footerLinks = [
    {
      title: "Start A Business",
      color: "border-blue-500",
      dotColor: "bg-blue-500",
      items: [
        { name: 'Solo Proprietor Firm', path: '/registrations/company/proprietorship-firm' },
        { name: 'Partnership Firm', path: '/registrations/company/partnership-firm' },
        { name: 'Private Limited Company', path: '/registrations/company/pvt-ltd-registration' },
        { name: 'LLP Registration', path: '/registrations/company/llp-registration' },
        { name: 'OPC Registration', path: '/registrations/company/opc-registration' }
      ]
    },
    {
      title: "License",
      color: "border-green-500",
      dotColor: "bg-green-500",
      items: [
        { name: 'Food FSSAI License', path: '/food-license/fssai/food-license-registration' },
        { name: 'Trade License', path: '/registrations/government' },
        { name: 'IEC Registration', path: '/registrations/government' },
        { name: 'Labour License', path: '/gov/labour-license' },
        { name: 'Drug License', path: '/registrations/government' }
      ]
    },
    {
      title: "Registrations",
      color: "border-purple-500",
      dotColor: "bg-purple-500",
      items: [
        { name: 'TradeMark registration', path: '/trademark/services/trademark-registration' },
        { name: 'Society Registration', path: '/registrations/company/society-registration' },
        { name: 'ESI registration', path: '/registrations/government' },
        { name: 'MSME Registration', path: '/registrations/company/udyam-registration' },
        { name: 'PF Registration', path: '/registrations/government' }
      ]
    },
    {
      title: "Goods & Services Tax",
      color: "border-orange-500",
      dotColor: "bg-orange-500",
      items: [
        { name: 'GST Registration', path: '/gst/services/gst-registration' },
        { name: 'GST Returns Filing', path: 'gst/services/gst-return-filing' },
        { name: 'GST Modification', path: '/gst/services/gst-modifications' },
        { name: 'GST Cancelation', path: '/gst/services/gst-modifications' },
        { name: 'GST E-Way Bills', path: '/gst/services/gst-return-filing' }
      ]
    }
  ];

  const socialMedia = [
    { icon: <FaFacebook className="text-xl" />, color: 'bg-blue-600 hover:bg-blue-700', name: 'Facebook' },
    { icon: <FaTwitter className="text-xl" />, color: 'bg-blue-400 hover:bg-blue-500', name: 'Twitter' },
    { icon: <FaLinkedin className="text-xl" />, color: 'bg-blue-700 hover:bg-blue-800', name: 'LinkedIn' },
    { icon: <FaInstagram className="text-xl" />, color: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700', name: 'Instagram' },
    { icon: <FaYoutube className="text-xl" />, color: 'bg-red-600 hover:bg-red-700', name: 'YouTube' }
  ];

  const reviews = [
    {
      initials: "VJ",
      name: "Vishnu Jadi",
      time: "9 months ago",
      rating: 5,
      comment: "Providing all Company Registrations, I have completed my private limited here. Excellent service and support throughout the process. Highly recommended for business registrations in Madhapur area."
    },
    {
      initials: "RK",
      name: "Rahul Kumar",
      time: "6 months ago",
      rating: 5,
      comment: "Got my GST registration done quickly and efficiently. The team was very professional and responsive to all my queries."
    },
    {
      initials: "SP",
      name: "Sunita Patel",
      time: "3 months ago",
      rating: 4,
      comment: "Good experience overall. The documentation process was explained clearly and they followed up regularly until completion."
    }
  ];

  const [currentReview, setCurrentReview] = React.useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };
 useEffect(()=>{window.scrollTo(0,0)})
  return (
    
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white pt-20 pb-16 relative overflow-hidden">
      {/* Animated background elements */}
      
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-500 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-purple-500 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-cyan-500 blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {footerLinks.map((section, index) => (
            <motion.div 
              key={index}
              className="transform hover:-translate-y-1 transition duration-500"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className={`text-xl font-bold mb-6 pb-2 border-b-2 ${section.color} inline-block`}>
                {section.title}
              </h3>
              <ul className="space-y-3">
  {section.items.map((item, itemIndex) => (
    <motion.li 
      key={itemIndex} 
      className="flex items-center group"
      whileHover={{ x: 5 }}
    >
      <span className={`w-2 h-2 ${section.dotColor} rounded-full mr-3 group-hover:scale-150 transition-transform`}></span>
      <Link to={item.path} className="text-gray-300 hover:text-white transition-colors hover:font-medium">
        {item.name}
      </Link>
    </motion.li>
  ))}
</ul>
            </motion.div>
          ))}
        </div>

        {/* Divider with animation */}
        <motion.div 
          className="border-t border-gray-700 my-8 opacity-50"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Company Info and Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Description */}
          <div>
            <motion.div 
              className="flex items-center mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white-to-r from-white-500 to-white-600 text-white p-2 rounded-lg mr-3">
              <img src="/FMS-final.png" alt="FMS Logo" className="h-15 w-auto" />

              </div>
              <br/>
            
            </motion.div>
            
            <motion.p 
              className="mb-6 text-gray-300 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
               <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                FORTUNE MULTI SERVICES
              </h2>
              Fortune Multi Services is your trusted partner for business registrations and
              licenses. Our experts simplify the process, ensuring accuracy and peace of mind.
              From sole proprietorships to private limited companies, we've got you covered.
              Let's build your business together!
            </motion.p>

            {/* Contact Info */}
            <div className="mb-8 space-y-4">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                  <FaPhone className="text-white text-sm" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Call Us</h4>
                  <a href="tel:+918919051513" className="text-gray-300 hover:text-white transition-colors">
                    +91 8919051513
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                  <FaRegEnvelope className="text-white text-sm" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Email Us</h4>
                  <a href="mailto:fortunemultiservices2023@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  fortunemultiservices2023@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Social Media */}
            <motion.div 
              className="flex space-x-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`${social.color} text-white rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-all shadow-lg hover:shadow-xl relative group`}
                  whileHover={{ y: -5 }}
                  aria-label={social.name}
                >
                  {social.icon}
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* Locations */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start">
                <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                  <FaMapMarkerAlt className="text-white text-xs" />
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Kukatpally Office</h4>
                  <p className="text-gray-300 text-sm">
                  Plot no 178&179, Flat No 303, Damarhu Construction, Mahadevpuram colony, Usha Mullapudi Rd, Kukatpally, Hyderabad, Telangana 500072
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
              
                  
                
              </div>
            </motion.div>
          </div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              What Our Clients Say
            </h3>
            <div className="bg-gray-800 rounded-xl p-6 shadow-xl relative overflow-hidden min-h-[400px]">
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
                <motion.button 
                  className="ml-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-4 py-2 text-xs font-medium transition-all shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Write a Review
                </motion.button>
              </div>

              {/* Review Navigation */}
              <div className="flex justify-between items-center mb-4">
                <motion.button 
                  className="bg-gray-700 hover:bg-gray-600 rounded-full w-8 h-8 flex items-center justify-center transition-colors shadow"
                  onClick={prevReview}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronLeft className="text-sm" />
                </motion.button>
                <div className="text-xs text-gray-400">{currentReview + 1} of {reviews.length} reviews</div>
                <motion.button 
                  className="bg-gray-700 hover:bg-gray-600 rounded-full w-8 h-8 flex items-center justify-center transition-colors shadow"
                  onClick={nextReview}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronRight className="text-sm" />
                </motion.button>
              </div>

              {/* Individual Review */}
              <motion.div 
                key={currentReview}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 rounded-lg p-5 relative z-10"
              >
                <div className="flex items-start mb-3">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 shrink-0 font-medium">
                    {reviews[currentReview].initials}
                  </div>
                  <div>
                    <div className="font-bold">{reviews[currentReview].name}</div>
                    <div className="text-xs text-gray-400">{reviews[currentReview].time}</div>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`text-sm ${i < reviews[currentReview].rating ? 'text-yellow-400' : 'text-gray-600'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-300 italic">
                  "{reviews[currentReview].comment}"
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Fortune Multi Services. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <motion.a 
              href="https://maps.app.goo.gl/S7vzwvP21XpckDAU9?g_st=ic" 
              className="hover:text-white transition-colors hover:underline"
              whileHover={{ scale: 1.05 }}
            >
              Sitemap
            </motion.a>
          </div>
        </motion.div>
      </div>
{/* Floating Call Button */}
<div className="fixed bottom-8 right-8 z-50">
  <div className="relative group">
    {/* Main Connect Button - Now with your logo */}
    <motion.button
      className="bg-white-to-br from-white-500 via-blue-600 to-indigo-700 text-black rounded-full p-3 flex items-center justify-center shadow-3xl hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-100 ease-in-out"
      whileHover={{ scale: 1.6, rotate: 0 }}
      whileTap={{ scale: 0.9 }}
      onClick={(e) => {
        if (window.innerWidth < 768) {
          const subButtons = e.currentTarget.nextElementSibling;
          subButtons.classList.toggle('hidden');
          subButtons.classList.toggle('flex');
        }
      }}
    >
      {/* Replace this with your logo */}
      <img 
        src="/images.jpg" 
        alt="Company Logo"
        className="h-16 w-16 object-contain"
      />
    </motion.button>

    {/* Sub Buttons Container */}
    <div className="absolute bottom-full right-0 mb-6 space-y-3 hidden md:group-hover:flex md:group-hover:opacity-100 md:opacity-0 md:flex-col md:transition-all md:duration-300 flex-col backdrop-blur-md p-2 rounded-xl bg-white/10 shadow-lg">
      {/* WhatsApp Button */}
      <motion.button
        className="bg-gradient-to-r from-[#25D366] to-[#20C65A] text-white rounded-full p-4 flex items-center justify-center shadow-lg hover:shadow-[0_0_15px_rgba(37,211,102,0.5)] transition-all duration-200"
        whileHover={{ scale: 1.15, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open("https://wa.me/918919051513", "_blank")}
        title="Chat on WhatsApp"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.button>

      {/* Call Button */}
      <motion.button
        className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full p-4 flex items-center justify-center shadow-lg hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-200"
        whileHover={{ scale: 1.15, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.location.href = "tel:+918919051513"}
        title="Call Now"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </motion.button>

      {/* Location Button */}
      <motion.a
        href="https://maps.app.goo.gl/cj5ynBGQGSeejTa79?g_st=awb"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full p-4 flex items-center justify-center shadow-lg hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-200"
        whileHover={{ scale: 1.15, y: -2 }}
        whileTap={{ scale: 0.9 }}
        title="View Location"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </motion.a>
    </div>
  </div>
</div>
</footer>
  );
};

export default Footer;