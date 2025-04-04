import React from 'react';
import ServiceCard from './ServiceCard';
import { FileText, Building2, Receipt, Headphones, Rocket, Shield, PieChart, Users } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            India's Most Trusted Tax and Financial Services Platform
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive business solutions designed to help your company grow while staying compliant
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Rocket className="text-white" size={28} />}
            iconBg="bg-blue-600"
            title="Startup Launchpad"
            description="From ideation to incorporation, we guide you through every step of starting your business with legal and financial structuring."
          />
          
          <ServiceCard
            icon={<Building2 className="text-white" size={28} />}
            iconBg="bg-green-600"
            title="Business Registration"
            description="Complete registration for LLP, Private Limited, OPC, or Proprietorship with all necessary licenses and compliance."
          />
          
          <ServiceCard
            icon={<PieChart className="text-white" size={28} />}
            iconBg="bg-purple-600"
            title="Accounting Services"
            description="Professional bookkeeping, financial reporting, and management accounting to keep your finances organized."
          />
          
          <ServiceCard
            icon={<Receipt className="text-white" size={28} />}
            iconBg="bg-red-600"
            title="Tax Compliance"
            description="End-to-end GST filing, income tax returns, TDS compliance, and audit support for businesses of all sizes."
          />
          
          <ServiceCard
            icon={<Shield className="text-white" size={28} />}
            iconBg="bg-indigo-600"
            title="Legal Compliance"
            description="ROC filings, annual returns, and other regulatory compliance services to keep your business protected."
          />
          
          <ServiceCard
            icon={<Users className="text-white" size={28} />}
            iconBg="bg-teal-600"
            title="HR & Payroll"
            description="Complete payroll processing, PF/ESI compliance, and HR policy formulation for your workforce."
          />
          
          <ServiceCard
            icon={<FileText className="text-white" size={28} />}
            iconBg="bg-amber-600"
            title="Business Loans"
            description="Assistance in securing working capital, equipment financing, and other business loan requirements."
          />
          
          <ServiceCard
            icon={<Headphones className="text-white" size={28} />}
            iconBg="bg-pink-600"
            title="Dedicated Support"
            description="Assigned relationship manager with 24/7 accessibility for all your business queries and needs."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;