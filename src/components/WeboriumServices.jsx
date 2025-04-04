import { FaGlobe, FaMobileAlt, FaShoppingCart, FaServer, FaChartLine, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WeboriumServices = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <br/>
      <br/>
      <br/>
      <br/>
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">WEB SERVICES</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            From Idea to Reality - We Build Stunning, High-Performance Websites That Drive Results
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Get Your Free Consultation
          </motion.button>
        </motion.div>
      </header>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Our <span className="text-blue-600">Web Solutions</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-blue-600 text-4xl mb-4">
              <FaGlobe />
            </div>
            <h3 className="text-xl font-bold mb-3">Business Websites</h3>
            <p className="text-gray-600">
              Professional websites that establish credibility and attract customers. Perfect for startups, SMEs, and enterprises.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-blue-600 text-4xl mb-4">
              <FaMobileAlt />
            </div>
            <h3 className="text-xl font-bold mb-3">Mobile-First Design</h3>
            <p className="text-gray-600">
              Responsive websites that look and perform flawlessly on all devices, with priority on mobile experience.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-blue-600 text-4xl mb-4">
              <FaShoppingCart />
            </div>
            <h3 className="text-xl font-bold mb-3">E-Commerce Solutions</h3>
            <p className="text-gray-600">
              Powerful online stores with secure payment gateways, inventory management, and marketing tools.
            </p>
          </motion.div>

          {/* Service 4 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-blue-600 text-4xl mb-4">
              <FaServer />
            </div>
            <h3 className="text-xl font-bold mb-3">Web Applications</h3>
            <p className="text-gray-600">
              Custom web apps with advanced functionality tailored to your specific business needs.
            </p>
          </motion.div>

          {/* Service 5 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-blue-600 text-4xl mb-4">
              <FaChartLine />
            </div>
            <h3 className="text-xl font-bold mb-3">SEO & Marketing</h3>
            <p className="text-gray-600">
              Comprehensive digital marketing services to increase your online visibility and conversions.
            </p>
          </motion.div>

          {/* Service 6 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-blue-600 text-4xl mb-4">
              <FaGlobe />
            </div>
            <h3 className="text-xl font-bold mb-3">Website Maintenance</h3>
            <p className="text-gray-600">
              Ongoing support, updates, and security to keep your website running smoothly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            Our <span className="text-blue-600">Simple Process</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="font-bold mb-2">Consultation</h3>
              <p className="text-gray-600">We discuss your vision and requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="font-bold mb-2">Planning</h3>
              <p className="text-gray-600">We create a customized strategy</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="font-bold mb-2">Development</h3>
              <p className="text-gray-600">We build your digital solution</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="font-bold mb-2">Launch</h3>
              <p className="text-gray-600">We deploy and support your project</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-indigo-800 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Let's create something amazing together. We handle everything from concept to completion.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Get Started Today
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-900 transition-all"
          >
            View Portfolio
          </motion.button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Get in <span className="text-blue-600">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-blue-600 text-4xl mb-4">
              <FaPhone />
            </div>
            <h3 className="text-xl font-bold mb-3">Call Us</h3>
            <p className="text-gray-600 mb-2">Available 10AM - 7PM</p>
            <a href="tel:+918919051513" className="text-blue-600 font-bold text-lg hover:underline">
              +91 89190 51513
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-blue-600 text-4xl mb-4">
              <FaEnvelope />
            </div>
            <h3 className="text-xl font-bold mb-3">Email Us</h3>
            <p className="text-gray-600 mb-2">Response within 24 hours</p>
            <a href="fortunemultiservices2023@gmail.com" className="text-blue-600 font-bold text-lg hover:underline">
            fortunemultiservices2023@gmail.com
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-blue-600 text-4xl mb-4">
              <FaInstagram />
            </div>
            <h3 className="text-xl font-bold mb-3">Follow Us</h3>
            <p className="text-gray-600 mb-2">For updates and offers</p>
            <a href="https://instagram.com/weborium" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold text-lg hover:underline">
              @weborium
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeboriumServices;