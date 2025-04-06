import React from 'react';
import { useEffect } from 'react';
export default function UdyamRegistration() {
     useEffect(()=>{window.scrollTo(0,0)})
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 font-sans">
            <br/>
            <br/>
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                    MSME Udyam Registration 
                </h1>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Complete guide to registering your business under Udyam for government benefits and incentives
                </p>
            </div>

            {/* Introduction */}
            <section className="mb-12">
                <p className="text-gray-700 mb-4 leading-relaxed">
                    <strong className="text-blue-800">Udyam registration </strong> has become an essential process for small and medium enterprises (SMEs) looking to take advantage of government schemes, financial incentives, and various support programs designed to foster growth and innovation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                with its burgeoning startup ecosystem and robust industrial sectors, is an ideal city for entrepreneurs to thrive. This guide covers everything about <strong className="text-blue-800">Udyam registration</strong>, including the process, benefits, eligibility, required documents, and common challenges.
                </p>
            </section>

            {/* What is Udyam Registration */}
            <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                    What is Udyam Registration?
                </h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        <strong className="text-blue-800">Udyam registration</strong> is a government initiative under the Ministry of Micro, Small, and Medium Enterprises (MSME) that provides businesses with a simplified registration process. It replaced the older <strong className="text-blue-800">Udyog Aadhaar</strong> system in July 2020.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        The registration is completely online and paperless, requiring only basic business information. Once registered, businesses can access various incentives, subsidies, and financial support to help MSMEs grow.
                    </p>
                </div>
            </section>

            {/* Why Register in Hyderabad */}
            <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                    Why Udyam Registration
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">Government Support</h3>
                        <p className="text-gray-700">Registered MSMEs can access subsidies, tax benefits, and government schemes designed to foster small business growth.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">Ease of Doing Business</h3>
                        <p className="text-gray-700">Hyderabad has excellent infrastructure and pro-business policies that support MSME development.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">Access to Funding</h3>
                        <p className="text-gray-700">Banks provide priority lending to MSMEs at lower interest rates, reducing capital costs.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">Networking Opportunities</h3>
                        <p className="text-gray-700">Connect with investors, businesses, and industry leaders in Hyderabad's vibrant ecosystem.</p>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                    Key Benefits of Udyam Registration
                </h2>
                <div className="space-y-4">
                    {[
                        "Access to Government Schemes (CGS, PMEGP, Technology Upgradation)",
                        "Priority Lending from banks at lower interest rates",
                        "Tax Benefits including exemptions and duty concessions",
                        "Rebates on Electricity Bills from Telangana government",
                        "Preference in Government Tenders",
                        "Protection Against Delayed Payments",
                        "ISO Certification Reimbursement",
                        "Support for International Trade",
                        "Market Development Assistance",
                        "Additional State Government Benefits"
                    ].map((benefit, index) => (
                        <div key={index} className="flex items-start">
                            <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 mt-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-gray-700">{benefit}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Eligibility Criteria */}
            <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                    Eligibility Criteria
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-blue-800 text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">Enterprise Type</th>
                                <th className="py-3 px-4 text-left">Investment Limit</th>
                                <th className="py-3 px-4 text-left">Turnover Limit</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="py-3 px-4 font-medium">Micro</td>
                                <td className="py-3 px-4">Up to ₹1 crore</td>
                                <td className="py-3 px-4">Up to ₹5 crore</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 font-medium">Small</td>
                                <td className="py-3 px-4">Up to ₹10 crore</td>
                                <td className="py-3 px-4">Up to ₹50 crore</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 font-medium">Medium</td>
                                <td className="py-3 px-4">Up to ₹50 crore</td>
                                <td className="py-3 px-4">Up to ₹250 crore</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                    Note: For businesses with multiple units, combine investment and turnover of all units.
                </p>
            </section>

            {/* Documents Required */}
            <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                    Documents Required
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        "Aadhaar Card of proprietor/partner/authorized signatory",
                        "PAN Card of business (for companies/LLPs)",
                        "Business Address proof",
                        "Bank Account details (IFSC code & account number)",
                        "Business activity details",
                        "Investment and turnover information"
                    ].map((doc, index) => (
                        <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                            <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-gray-700">{doc}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Registration Process */}
            <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                    Registration Process
                </h2>
                <div className="space-y-6">
                    {[
                        {
                            step: "1",
                            title: "Visit Udyam Portal",
                            content: "Go to the official Udyam registration portal at udyamregistration.gov.in"
                        },
                        {
                            step: "2",
                            title: "Select Registration Type",
                            content: "Choose between new registration or upgrading existing UAM"
                        },
                        {
                            step: "3",
                            title: "Enter Aadhaar Details",
                            content: "Provide Aadhaar number of proprietor/partner/authorized signatory"
                        },
                        {
                            step: "4",
                            title: "Verify with OTP",
                            content: "Verify mobile number linked with Aadhaar via OTP"
                        },
                        {
                            step: "5",
                            title: "Fill Business Details",
                            content: "Provide business name, type, PAN, address, and bank details"
                        },
                        {
                            step: "6",
                            title: "Select Activity Type",
                            content: "Specify if your business is manufacturing or service-oriented"
                        },
                        {
                            step: "7",
                            title: "Provide Financial Details",
                            content: "Enter investment in plant/machinery and annual turnover"
                        },
                        {
                            step: "8",
                            title: "Submit & Receive Certificate",
                            content: "Review, submit, and receive Udyam Registration Certificate via email"
                        }
                    ].map((step) => (
                        <div key={step.step} className="flex">
                            <div className="flex-shrink-0 mr-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-800 font-bold">
                                    {step.step}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">{step.title}</h3>
                                <p className="text-gray-700">{step.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Compliance & Challenges */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                        Compliance Requirements
                    </h2>
                    <ul className="space-y-3">
                        {[
                            "Annual filing of financial statements and business details",
                            "Updating registration for any business changes",
                            "Compliance with environmental and labor laws"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                                <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                        Common Challenges
                    </h2>
                    <ul className="space-y-3">
                        {[
                            "Aadhaar verification issues due to incorrect details",
                            "Lack of awareness about registration benefits",
                            "Difficulty in correctly classifying business size"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                                <div className="bg-red-100 text-red-800 rounded-full p-1 mr-3">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* Conclusion */}
            <section className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                    Conclusion
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    <strong className="text-blue-800">Udyam registration in Hyderabad</strong> is essential for MSMEs to access government benefits, financial support, and business growth opportunities. The streamlined online process makes it easy for small businesses to register and start enjoying the advantages.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Hyderabad's supportive ecosystem and government incentives create an ideal environment for MSMEs to flourish. Whether you're starting a new business or scaling an existing one, <strong className="text-blue-800">Udyam registration</strong> opens doors to numerous opportunities in the city's dynamic economy.
                </p>
            </section>
        </div>
    );
}