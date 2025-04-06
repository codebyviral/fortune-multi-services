import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Helmet } from "react-helmet";
import { useEffect } from 'react';
const Hero = () => {
  useEffect(()=>{window.scrollTo(0,0)})
  return (
    <section className="hero-gradient py-20 md:py-28">
      

<Helmet>
  <title>Fortune Multi Services | Business, Legal & Digital Solutions</title>
  <meta
    name="description"
    content="Empowering your business with expert legal, financial, and digital services. Get everything you need in one place — Fortune Multi Services."
  />
  <meta
    name="keywords"
    content="business services, legal documentation, financial consulting, digital solutions, Fortune Multi Services"
  />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Fortune Multi Services | Your Growth Partner" />
  <meta
    property="og:description"
    content="From company registration to GST filing and digital solutions, Fortune Multi Services covers all your business needs."
  />
  <meta property="og:url" content="https://fortunemultiservices.in/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://fortunemultiservices.in/assets/hero-banner.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="All-in-One Business Solutions | Fortune Multi Services" />
  <meta
    name="twitter:description"
    content="Explore powerful services to launch and grow your business — company registration, tax filing, branding, and more."
  />
  <meta name="twitter:image" content="https://fortunemultiservices.in/assets/hero-banner.png" />

  <link rel="canonical" href="https://fortunemultiservices.in/" />
</Helmet>

      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h3 className="text-gray-600 text-xl mb-2">Save time. Save money.</h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue leading-tight mb-4">
            We Registering All Indian companies..
          </h1>
          <p className="text-gray-600 text-lg mb-8 md:pr-10 leading-relaxed">
            We are providing all the legal registration services | with 100% satisfaction & affordable prices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
          <button 
  className="bg-brand-green bg-blue-600 text-white flex items-center gap-2 px-6 py-3 rounded-md font-medium"
  onClick={() => window.location.href = '/our_profile/contact-us'}
>
  Get Started <ArrowRight size={16} />
</button>

          </div>
        </div>
        
        <div className="md:w-1/2">
          <img 
            src="/41.jpg"
            alt="Business Registration Illustration" 
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
