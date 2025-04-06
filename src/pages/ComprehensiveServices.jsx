import React from 'react';
import { Star, Percent, Shield, Users, FileText, Fish, Globe, DollarSign, Briefcase, Building2, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const ComprehensiveServices = () => {
  const services = [
    {
      icon: <Star className="text-white" size={24} />,
      iconBg: 'bg-orange-400',
      title: 'Business Registration',
      description: 'Get Business Registration at Low Prices',
      path: '/business-registration',
    },
    {
      icon: <Percent className="text-white" size={24} />,
      iconBg: 'bg-pink-400',
      title: 'GST Registration',
      description: 'GST Registration at Low Price.',
      path: '/gst-registration',
    },
    {
      icon: <Shield className="text-white" size={24} />,
      iconBg: 'bg-green-400',
      title: 'Trade License',
      description: 'Take Municipal Permission to Your Business',
      path: '/trade-license',
    },
    {
      icon: <Users className="text-white" size={24} />,
      iconBg: 'bg-blue-400',
      title: 'Society Registration',
      description: 'Get Done all Activities by Group of Peoples',
      path: '/society-registration',
    },
    {
      icon: <FileText className="text-white" size={24} />,
      iconBg: 'bg-green-400',
      title: 'Trademark Registration',
      description: 'Register your Brand with Trademark.',
      path: '/trademark-registration',
    },
    {
      icon: <Fish className="text-white" size={24} />,
      iconBg: 'bg-blue-400',
      title: 'Food Registration',
      description: 'Start your Food Business With FSSAI.',
      path: '/food-registration',
    },
    {
      icon: <Globe className="text-white" size={24} />,
      iconBg: 'bg-blue-500',
      title: 'IEC Registration',
      description: 'Import and Export your Business to other Countries.',
      path: '/iec-registration',
    },
    {
      icon: <DollarSign className="text-white" size={24} />,
      iconBg: 'bg-purple-400',
      title: 'Income Tax Filing',
      description: 'File Your Income Tax Returns with Experts.',
      path: '/income-tax-filing',
    },
    {
      icon: <Briefcase className="text-white" size={24} />,
      iconBg: 'bg-green-400',
      title: 'Labour License',
      description: 'Provide Security for Your Employees.',
      path: '/labour-license',
    },
    {
      icon: <Building2 className="text-white" size={24} />,
      iconBg: 'bg-pink-400',
      title: 'MSME Registration',
      description: 'Register your Business on Udyam',
      path: '/msme-registration',
    },
  ];
  useEffect(()=>{window.scrollTo(0,0)})
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>Comprehensive Business & Government Services | Fortune Multi Services</title>
        <meta
          name="description"
          content="Explore a wide range of services offered by Fortune Multi Services, including business registration, tax filing, FSSAI licensing, trademark registration, and government documentation."
        />
        <meta
          name="keywords"
          content="business registration, government services, FSSAI license, GST registration, trademark registration, digital compliance, tax filing, multi services, Fortune Multi Services"
        />
        <meta property="og:title" content="All-in-One Business & Government Services | Fortune Multi Services" />
        <meta
          property="og:description"
          content="Get reliable and expert support for all your business and legal service needs. Trusted by startups, MSMEs, and enterprises."
        />
        <meta property="og:url" content="https://fortunemultiservices.in/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://fortunemultiservices.in/assets/services-preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Business & Legal Services | Fortune Multi Services" />
        <meta
          name="twitter:description"
          content="From registrations to renewals, Fortune Multi Services handles it all. One-stop solution for businesses across India."
        />
        <meta name="twitter:image" content="https://fortunemultiservices.in/assets/services-preview.png" />
        <link rel="canonical" href="https://fortunemultiservices.in/services" />
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            From compliance to financial services, we cover them all.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="flex flex-col bg-white shadow-sm rounded-lg p-6 border border-gray-100 relative hover:shadow-md transition-shadow"
            >
              <div className={`${service.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                {service.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <div className="absolute top-1/2 right-4 text-gray-300">
                <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveServices;