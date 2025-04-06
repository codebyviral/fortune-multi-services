import { FaGlobe, FaMobileAlt, FaShoppingCart, FaServer, FaChartLine, FaPhone, FaEnvelope, FaInstagram, FaCode, FaDatabase, FaCloud, FaShieldAlt, FaSync } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Helmet from "react-helmet"
import { useEffect } from 'react';
const WeboriumServices = () => {
  useEffect(()=>{window.scrollTo(0,0)})
  return (
    <div className="min-h-screen bg-gray-50">
        <Helmet>
        <title>Weborium Services | Fortune Multi Services</title>
        <meta
          name="description"
          content="Explore Weborium Services by Fortune Multi Services – offering website development, SEO, digital marketing, and custom online solutions."
        />
        <meta
          name="keywords"
          content="Weborium Services, website development, SEO, digital marketing, Fortune Multi Services"
        />
        <meta name="author" content="Fortune Multi Services" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Weborium Services | Fortune Multi Services" />
        <meta property="og:description" content="We provide expert website and digital services to grow your online presence." />
        <meta property="og:image" content="https://fortunemultiservices.in/public/FMS.png" />
        <meta property="og:url" content="https://fortunemultiservices.in/WEBORIUM/weborium" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Weborium Services | Fortune Multi Services" />
        <meta name="twitter:description" content="Boost your business with our website design, SEO, and digital growth solutions." />
        <meta name="twitter:image" content="https://fortunemultiservices.in/assets/preview-image.png" />

        <link rel="canonical" href="https://fortunemultiservices.in/WEBORIUM/weborium" />
      </Helmet>
      <br/>
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">WEB DEVELOPMENT SERVICES</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Full-Cycle Web Development From Concept to Deployment
          </p>
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

      {/* Tech Stack Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Our <span className="text-blue-600">Technology Stack</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-blue-600 text-4xl mb-4">
              <FaCode />
            </div>
            <h3 className="text-xl font-bold mb-4">Frontend Technologies</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                React.js, Next.js, Angular
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                TypeScript, JavaScript (ES6+)
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Tailwind CSS, SASS, Bootstrap
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Redux, Context API
              </li>
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-blue-600 text-4xl mb-4">
              <FaServer />
            </div>
            <h3 className="text-xl font-bold mb-4">Backend Technologies</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Node.js, Express.js
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Python (Django, Flask)
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                PHP (Laravel)
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Java, .NET Core
              </li>
            </ul>
          </motion.div>

          {/* Databases */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-blue-600 text-4xl mb-4">
              <FaDatabase />
            </div>
            <h3 className="text-xl font-bold mb-4">Databases</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                MongoDB, PostgreSQL
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                MySQL, Firebase
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Redis, Elasticsearch
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                AWS DynamoDB
              </li>
            </ul>
          </motion.div>

          {/* DevOps */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-blue-600 text-4xl mb-4">
              <FaCloud />
            </div>
            <h3 className="text-xl font-bold mb-4">DevOps & Cloud</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                AWS, Azure, Google Cloud
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Docker, Kubernetes
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                CI/CD Pipelines
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Terraform, Ansible
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SDLC Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            Our <span className="text-blue-600">Development Lifecycle</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Requirement Analysis */}
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                <FaChartLine className="text-xl" />
              </div>
              <h3 className="font-bold mb-2">1. Requirement Analysis</h3>
              <p className="text-gray-600 text-sm">Gathering business requirements and technical specifications</p>
            </div>

            {/* Planning */}
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                <FaServer className="text-xl" />
              </div>
              <h3 className="font-bold mb-2">2. System Design</h3>
              <p className="text-gray-600 text-sm">Architecture design and technology selection</p>
            </div>

            {/* Development */}
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                <FaCode className="text-xl" />
              </div>
              <h3 className="font-bold mb-2">3. Development</h3>
              <p className="text-gray-600 text-sm">Agile development with sprints and iterations</p>
            </div>

            {/* Testing */}
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                <FaShieldAlt className="text-xl" />
              </div>
              <h3 className="font-bold mb-2">4. Testing</h3>
              <p className="text-gray-600 text-sm">QA, Security, and Performance testing</p>
            </div>

            {/* Deployment */}
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                <FaSync className="text-xl" />
              </div>
              <h3 className="font-bold mb-2">5. Deployment & Maintenance</h3>
              <p className="text-gray-600 text-sm">CI/CD deployment and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting & Deployment Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          <span className="text-blue-600">Hosting</span> & Deployment Options
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Shared Hosting */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-blue-600 text-4xl mb-4">
              <FaServer />
            </div>
            <h3 className="text-xl font-bold mb-3">Shared Hosting</h3>
            <p className="text-gray-600 mb-4">
              Cost-effective solution for small websites and blogs
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                cPanel/Plesk access
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                SSD Storage
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Free SSL Certificate
              </li>
            </ul>
          </motion.div>

          {/* Cloud Hosting */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-blue-100"
          >
            <div className="text-blue-600 text-4xl mb-4">
              <FaCloud />
            </div>
            <h3 className="text-xl font-bold mb-3">Cloud Hosting</h3>
            <p className="text-gray-600 mb-4">
              Scalable solutions for growing businesses
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                AWS/Azure/Google Cloud
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Auto-scaling
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Load Balancing
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                CDN Integration
              </li>
            </ul>
          </motion.div>

          {/* Dedicated Servers */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-blue-600 text-4xl mb-4">
              <FaDatabase />
            </div>
            <h3 className="text-xl font-bold mb-3">Dedicated Servers</h3>
            <p className="text-gray-600 mb-4">
              High-performance solutions for enterprise applications
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Bare Metal Servers
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Custom Configurations
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                24/7 Monitoring
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Managed Services
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Existing sections (Services, Process, CTA, Contact) remain the same */}
      {/* ... */}

    </div>
  );
};

export default WeboriumServices;