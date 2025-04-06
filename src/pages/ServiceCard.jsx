import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
const ServiceCard = ({ 
  icon, 
  iconBg, 
  title, 
  description,
  className = '' 
}) => {
   useEffect(()=>{window.scrollTo(0,0)})
  return (
    <div className={`${className} group flex flex-col h-full border border-gray-100 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-100`}>
      <div className={`${iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-opacity-90`}>
        {React.cloneElement(icon, {
          className: "w-6 h-6 text-white"
        })}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;