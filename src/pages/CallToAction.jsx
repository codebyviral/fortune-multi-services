import React from 'react';
import { ArrowRight, Phone, ClipboardList } from 'lucide-react';
import { Helmet } from "react-helmet";
import { useEffect } from 'react';
const CallToAction = () => {
  useEffect(()=>{window.scrollTo(0,0)})
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">

<Helmet>
  <meta name="description" content="Take the next step with Fortune Multi Services – expert help in business registration, tax filings, and compliance. Contact us now!" />
  <meta name="keywords" content="business support, contact us, register business, file taxes, compliance help, Fortune Multi Services" />

  {/* Open Graph (Social Preview) */}
  <meta property="og:title" content="Get Expert Help with Your Business Needs | Fortune Multi Services" />
  <meta property="og:description" content="Schedule a consultation or get in touch with our team to handle your business documentation and registration smoothly." />
  <meta property="og:image" content="https://fortunemultiservices.in/assets/contact-preview.png" />
  <meta property="og:url" content="https://fortunemultiservices.in/contact-us" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Talk to Experts | Fortune Multi Services" />
  <meta name="twitter:description" content="Get reliable business support from experts. Contact us today for quick and professional services." />
  <meta name="twitter:image" content="https://fortunemultiservices.in/assets/contact-preview.png" />

  <link rel="canonical" href="https://fortunemultiservices.in/contact-us" />
</Helmet>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Ready to <span className="text-yellow-300 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-400">register</span> your company?
        </h2>
        
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-blue-100">
          Get started today and experience seamless company registration with our expert team guiding you every step of the way.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a 
            href="/our_profile/contact-us"
            className="inline-flex items-center justify-center px-12 py-6 bg-white text-blue-700 hover:bg-gray-50 hover:text-blue-800 
                      text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                      transform hover:-translate-y-1 hover:scale-[1.02] gap-3"
          >
            <Phone size={20} className="flex-shrink-0" />
            Contact Us
          </a>
        </div>
        
        <div className="mt-16 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current text-yellow-300" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="text-lg font-medium text-white">
              5.0 Rating
            </span>
          </div>
          <p className="text-blue-100 text-lg">
            Trusted by <span className="font-bold text-white">5,000+</span> businesses across India
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;