import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaHome, FaArrowLeft, FaSearch, FaSadTear } from "react-icons/fa";

export default function NotFound() {
  const navigate = useNavigate();
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

 useEffect(()=>{window.scrollTo(0,0)})
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center justify-center p-6">
      {/* Decorative elements */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-purple-200 opacity-15 blur-3xl"></div>
      </div>

      <motion.div 
        className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
          <motion.h1 
            className="text-5xl font-bold flex items-center justify-center gap-3"
            variants={item}
          >
            <FaSadTear className="text-yellow-300" />
            404
          </motion.h1>
          <motion.p 
            className="text-xl text-center mt-2 text-blue-100"
            variants={item}
          >
            Oops! Page Not Found
          </motion.p>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <motion.div variants={item}>
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-40 h-40 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                  ?
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h2 
            className="text-3xl font-bold text-center text-gray-800 mb-4"
            variants={item}
          >
            Lost In Digital Space
          </motion.h2>

          <motion.p 
            className="text-lg text-gray-600 text-center mb-8 leading-relaxed"
            variants={item}
          >
            The page you're searching for has vanished into the digital void. 
            Maybe it was never here, 
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto"
            variants={item}
          >
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 font-medium"
            >
              <FaArrowLeft /> Go Back
            </button>
            <button
              onClick={() => navigate("/")}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium hover:from-blue-700 hover:to-blue-900"
            >
              <FaHome /> Return Home
            </button>
          </motion.div>

          <motion.div 
            className="mt-10 bg-blue-50 rounded-lg p-4"
            variants={item}
          >
            <div className="flex items-center">
              <FaSearch className="text-blue-600 mr-3 text-xl" />
              <div>
                <h3 className="font-medium text-blue-800">Search Tip</h3>
                <p className="text-sm text-gray-600">
                  Try using our search feature or check the URL for typos.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 text-center text-sm text-gray-500 border-t border-gray-200">
          <motion.p variants={item}>
            Still need help? <a href="/contact" className="text-blue-600 hover:underline">Contact support</a>
          </motion.p>
        </div>
      </motion.div>

      {/* Floating help button */}
      <motion.div 
        className="fixed bottom-8 right-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <button className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </motion.div>
    </div>
  );
}