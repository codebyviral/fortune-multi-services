import {
  Check,
  FileText,
  Users,
  Smile,
  Share2,
  RefreshCw,
  DollarSign,
  ImageIcon,
  Snowflake,
  Building,
  Percent,
  FileSpreadsheet,
} from "lucide-react"
import React from "react"
import Helmet from "react-helmet"
import { useEffect } from "react"

export default function AboutUsPage() {
  useEffect(()=>{window.scrollTo(0,0)})
  return (
    <div className="flex flex-col min-h-screen">
            <Helmet>
        <title>About Us | Fortune Multi Services</title>
        <meta
          name="description"
          content="Learn more about Fortune Multi Services – our mission, vision, and how we help businesses with registrations, compliance, and digital solutions."
        />
        <meta
          name="keywords"
          content="About Fortune Multi Services, our team, business consultancy, registration experts, digital solutions, legal services"
        />
        <meta name="author" content="Fortune Multi Services" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="About Us | Fortune Multi Services" />
        <meta property="og:description" content="Know more about our team, services, and journey at Fortune Multi Services – your business growth partner." />
        <meta property="og:image" content="https://fortunemultiservices.in/assets/about-preview.png" />
        <meta property="og:url" content="https://fortunemultiservices.in/our_profile/aboutuspage" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Fortune Multi Services" />
        <meta name="twitter:description" content="Discover how Fortune Multi Services empowers startups and businesses across India with expert solutions." />
        <meta name="twitter:image" content="https://fortunemultiservices.in/assets/about-preview.png" />

        <link rel="canonical" href="https://fortunemultiservices.in/our_profile/aboutuspage" />
      </Helmet>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Hero Section - About Us */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-gray-500 mb-2">About us</div>
              <h2 className="text-4xl font-bold text-[#1e3a6e] mb-6">
                Who we are and what We can do for your Business?
              </h2>
              <p className="text-gray-600 mb-6">
                Invention business solutions is largest Off-line & online compliance services platform in this city
                dedicated to helping people start and grow their business, at an affordable cost. Our aim is to help the
                entrepreneur on the legal and regulatory requirements, and be a partner throughout the business
                lifecycle, offering support at every stage to ensure the business remains compliant and continually
                growing.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700 font-medium">Make a massive Progress</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700 font-medium">Safe investment</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700 font-medium">Get Your Business Registrations & Licenses</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Business services illustration"
                width={600}
                height={400}
                className="object-contain rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by experts section */}
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e3a6e] mb-12">
            Trusted by experts and businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FileText className="h-6 w-6 text-[#1e3a6e]" />,
                title: "GST Filling",
                description: "File your GST returns every month with us.",
              },
              {
                icon: <Users className="h-6 w-6 text-[#1e3a6e]" />,
                title: "Labour Renews",
                description: "Renew your Labour License annually with us.",
              },
              {
                icon: <Building className="h-6 w-6 text-[#1e3a6e]" />,
                title: "PvtLtd Compliances",
                description: "File Private limited Company yearly compliances.",
              },
              {
                icon: <Percent className="h-6 w-6 text-[#1e3a6e]" />,
                title: "IT returns",
                description: "File your Income tax returns here.",
              },
            ].map((service, index) => (
              <div 
                key={index} 
                className="border rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#1e3a6e] mb-2">{service.title}</h3>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-[#1e3a6e] text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">We have Over Seven years of Experience</h2>
          <p className="text-xl text-center mb-6">"Ensure Professional, Accurate, High Quality Service".</p>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Our Team has the Knowledge and Expertise to Ensure Professional, Accurate, High Quality Services.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <FileSpreadsheet className="h-8 w-8" />, number: "734+", text: "Successful Project" },
              { icon: <Smile className="h-8 w-8" />, number: "586+", text: "Happy Clients" },
              { icon: <Users className="h-8 w-8" />, number: "3+", text: "Professionals Team" },
              { icon: <FileText className="h-8 w-8" />, number: "164+", text: "Services Offered" },
              { icon: <RefreshCw className="h-8 w-8" />, number: "100%", text: "Repeat Clients" },
              { icon: <DollarSign className="h-8 w-8" />, number: "50%", text: "Savings in Fees" },
              { icon: <ImageIcon className="h-8 w-8" />, number: "5+", text: "Payment Options" },
              { icon: <Snowflake className="h-8 w-8" />, number: "10+", text: "Cities Served" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-white/10">{stat.icon}</div>
                <div className="text-4xl font-bold text-[#00c853] mb-2">{stat.number}</div>
                <div className="text-sm text-blue-100">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India's largest financial services */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a6e] mb-6">India's largest financial services</h2>
              <p className="text-gray-600 mb-6">
                Invention Tax Solutions is the Best Tax And Corporates compliance platform that helps small, medium and
                large businesses to fulfill with various Business registrations and Licenses, tax filings, accounting,
                And government services. We have already served over 3,000 customers and have a steadily growing network
                of over 50+ professionals from all the major cities (Like Hyderabad, Bangalore) on our online platform.
                In 2016, we launched way of working for legal professionals across India.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: <FileText className="h-6 w-6 text-blue-500" />, number: "1257+", text: "Served clients" },
                { icon: <Users className="h-6 w-6 text-pink-500" />, number: "10+", text: "Office Employees" },
                { icon: <DollarSign className="h-6 w-6 text-amber-500" />, number: "2684+", text: "Invoices Completed" },
                { icon: <FileText className="h-6 w-6 text-blue-500" />, number: "782+", text: "Tax returns filed" },
                { icon: <Smile className="h-6 w-6 text-green-500" />, number: "1200+", text: "Happy clients" },
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg border hover:bg-gray-50 transition-colors">
                  <div className="p-3 rounded-full bg-gray-100">{stat.icon}</div>
                  <div>
                    <div className="text-xl font-bold text-gray-800">{stat.number}</div>
                    <div className="text-gray-500">{stat.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#1e3a6e] mb-4">200+ brands. 700+ businesses.</h2>
          <h3 className="text-4xl font-bold text-center text-[#1e3a6e] mb-12">20+ experts.</h3>
          <p className="text-center text-gray-600 max-w-4xl mx-auto mb-16">
            We are the trusted partners for tax experts and businesses across industries such as manufacturing, retail,
            FMCG, financial services, e-commerce and healthcare.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="h-10 w-10 text-pink-500" />,
                title: "GST Filings",
                description: "Easily file your GST monthly filings with our experts",
              },
              {
                icon: <Percent className="h-10 w-10 text-purple-500" />,
                title: "IncomeTax Returns",
                description: "File Income tax returns every year with us on time.",
              },
              {
                icon: <Share2 className="h-10 w-10 text-amber-500" />,
                title: "GST Way bills",
                description: "Generate GST e-way bills to transport your Goods.",
              },
              {
                icon: <Building className="h-10 w-10 text-blue-500" />,
                title: "Trade Filing",
                description: "Complete Trade License registration and renewal.",
              },
              {
                icon: <Percent className="h-10 w-10 text-blue-400" />,
                title: "ESI & PF returns",
                description: "File ESI and PF returns every month.",
              },
              {
                icon: <FileSpreadsheet className="h-10 w-10 text-orange-500" />,
                title: "TDS Refund",
                description: "File your ITR and get refunds from your TDS.",
              },
            ].map((service, index) => (
              <div key={index} className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex-shrink-0 p-3 rounded-full bg-gray-100">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1e3a6e] mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto flex justify-end">
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Make a Call
          </button>
        </div>
      </section>
    </div>
  )
}