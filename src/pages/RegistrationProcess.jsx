
import React from 'react';
import { FileText, CheckCircle, User, Building, Wallet, Calendar } from 'lucide-react';

const RegistrationProcess = () => {
  const processes = [
    {
      icon: <FileText className="text-pink-400" size={24} />,
      title: "Selecting Business Name",
      description: "Select your Business Name Which should be Unique."
    },
    {
      icon: <CheckCircle className="text-purple-400" size={24} />,
      title: "Name Approval",
      description: "Name Need to Get Approve From MCA"
    },
    {
      icon: <User className="text-amber-400" size={24} />,
      title: "Din & DSC for Directors",
      description: "Directors need to get Their DSC and Din Numbers."
    },
    {
      icon: <Building className="text-blue-400" size={24} />,
      title: "Company Incorporation",
      description: "Register Your Business and get Company Pan and Tan Numbers."
    },
    {
      icon: <Wallet className="text-teal-400" size={24} />,
      title: "Company Bank Account",
      description: "Need to Open a Bank Account on Business Name."
    },
    {
      icon: <Calendar className="text-orange-400" size={24} />,
      title: "Annual ROC Filings",
      description: "File Annual Compliances with ROC Every Year."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            We Register your Business easily
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We are the trusted partners for tax experts and businesses across industries such as manufacturing, retail, FMCG, financial services, e-commerce and healthcare.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {processes.map((process, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-white rounded-full p-2 shadow-md flex-shrink-0">
                    {process.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{process.title}</h3>
                    <p className="text-gray-600 text-sm">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <div className="relative">
              <img 
                src="/3rd.png" 
                alt="Registration Process" 
                className="max-w-full"
              />
              <div className="absolute -right-4 top-1/4">
                <div className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-xs">Upgrades</div>
              </div>
              <div className="absolute -right-4 top-1/3 mt-4">
                <div className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-xs">Support</div>
              </div>
              <div className="absolute -right-4 top-1/2">
                <div className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-xs">Scale</div>
              </div>
              <div className="absolute -right-4 top-2/3">
                <div className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-xs">Reliability</div>
              </div>
              <div className="absolute -right-4 top-3/4">
                <div className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-xs">Security</div>
              </div>
              <div className="absolute -right-4 bottom-1/4">
                <div className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-xs">Ingestion</div>
              </div>
              <div className="absolute -right-4 bottom-1/6">
                <div className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-xs">Integration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationProcess;
