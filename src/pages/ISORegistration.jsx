import { motion } from 'framer-motion';
import { Helmet } from "react-helmet";
import { useEffect } from 'react';
export default function ISORegistration() {
  useEffect(()=>{window.scrollTo(0,0)})
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-6 md:px-12 lg:px-24 font-sans">


<Helmet>
  <title>ISO Registration Services | Fortune Multi Services</title>
  <meta
    name="description"
    content="Get certified with Fortune Multi Services. We assist in ISO registration, documentation, and end-to-end certification services for businesses across India."
  />
  <meta
    name="keywords"
    content="ISO Registration, ISO Certification, ISO Consulting, ISO Services, Business Certification, Fortune Multi Services"
  />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="ISO Registration Services | Fortune Multi Services" />
  <meta
    property="og:description"
    content="Ensure quality standards with ISO certification. Expert ISO registration support from Fortune Multi Services."
  />
  <meta property="og:url" content="https://fortunemultiservices.in/gov/iso-registration" />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="https://fortunemultiservices.in/assets/images/iso-registration-banner.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="ISO Registration Services | Fortune Multi Services" />
  <meta
    name="twitter:description"
    content="Streamline your ISO certification process with our professional team. Trusted ISO registration services for all industries."
  />
  <meta name="twitter:image" content="https://fortunemultiservices.in/assets/images/iso-registration-banner.jpg" />

  <link rel="canonical" href="https://fortunemultiservices.in/gov/iso-registration" />
</Helmet>

      <div className="max-w-5xl mx-auto bg-white/90 shadow-2xl rounded-xl p-8 md:p-12 backdrop-blur-md">
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-8 text-center pt-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ISO Certificate Registration in Hyderabad
        </motion.h1>

        {/* Intro Section */}
        <motion.p
          className="text-lg text-gray-600 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Obtaining an <span className="font-semibold text-blue-700">ISO certificate registration</span> is a crucial step for businesses aiming to enhance their quality management systems, meet international standards, and gain a competitive edge. Recognized globally, ISO certification showcases adherence to top-tier management standards in quality, safety, and sustainability.
        </motion.p>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          In Hyderabad, a growing hub for innovation, businesses are increasingly pursuing ISO certification to build customer trust, boost efficiency, and expand their market presence.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          This guide offers a comprehensive look at <span className="font-semibold text-blue-700">ISO certificate registration</span> in Hyderabad—covering types of certifications, benefits, processes, eligibility, documents, costs, and compliance tips.
        </p>

        {/* What is ISO Certification */}
        <motion.h2
          className="text-3xl font-semibold text-blue-600 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          What is ISO Certification?
        </motion.h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          The <span className="font-semibold">International Organization for Standardization (ISO)</span> is a global, independent body that sets standards for quality, safety, and efficiency. ISO certification ensures your business aligns with these standards across management, manufacturing, or services.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          With standards tailored to industries, ISO addresses diverse needs like quality management, environmental responsibility, and data security.
        </p>

        {/* Why is ISO Important */}
        <motion.h2
          className="text-3xl font-semibold text-blue-600 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Why is ISO Certification Important?
        </motion.h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          ISO certification streamlines operations, mitigates risks, and boosts customer satisfaction—key for thriving in local and global markets.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">Key Reasons:</p>
        <ul className="list-disc pl-8 text-lg text-gray-600 space-y-4">
          <li><span className="font-semibold">International Recognition:</span> Boosts your global reputation.</li>
          <li><span className="font-semibold">Improved Customer Confidence:</span> Builds trust and loyalty.</li>
          <li><span className="font-semibold">Regulatory Compliance:</span> Meets industry standards effortlessly.</li>
          <li><span className="font-semibold">Enhanced Efficiency:</span> Reduces waste and optimizes processes.</li>
          <li><span className="font-semibold">Market Expansion:</span> Unlocks opportunities with big players.</li>
          <li><span className="font-semibold">Continuous Improvement:</span> Encourages ongoing growth.</li>
        </ul>

        {/* Types of ISO Certifications */}
        <motion.h2
          className="text-3xl font-semibold text-blue-600 mt-12 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Types of ISO Certifications Available in Hyderabad
        </motion.h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Hyderabad businesses can choose from a variety of ISO standards tailored to their needs:
        </p>
        <div className="grid gap-6">
          {[
            { title: "ISO 9001: Quality Management", desc: "Focuses on consistent quality and customer satisfaction." },
            { title: "ISO 14001: Environmental Management", desc: "Promotes sustainability and waste reduction." },
            { title: "ISO 45001: Occupational Health & Safety", desc: "Ensures a safe workplace for employees." },
            { title: "ISO 27001: Information Security", desc: "Protects sensitive data from threats." },
            { title: "ISO 22000: Food Safety", desc: "Ensures safe food practices in the supply chain." },
            { title: "ISO 50001: Energy Management", desc: "Improves energy efficiency and cuts costs." },
            { title: "ISO 13485: Medical Devices", desc: "Regulates quality in medical device production." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-indigo-600">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.h2
          className="text-3xl font-semibold text-blue-600 mt-12 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Benefits of ISO Certificate Registration in Hyderabad
        </motion.h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          ISO certification offers Hyderabad businesses a competitive edge and operational excellence.
        </p>
        <ul className="list-disc pl-8 text-lg text-gray-600 space-y-4">
          <li><span className="font-semibold">Enhanced Customer Trust:</span> Builds local and global loyalty.</li>
          <li><span className="font-semibold">Legal Compliance:</span> Avoids penalties with ease.</li>
          <li><span className="font-semibold">Market Recognition:</span> Stands out in a crowded market.</li>
          <li><span className="font-semibold">Efficiency & Cost Savings:</span> Cuts waste and boosts productivity.</li>
        </ul>

        {/* Documents */}
        <motion.h2
          className="text-3xl font-semibold text-blue-600 mt-12 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Documents Required for ISO Certificate Registration
        </motion.h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Prepare these documents to ensure a smooth certification process:
        </p>
        <ul className="list-disc pl-8 text-lg text-gray-600 space-y-4">
          <li><span className="font-semibold">Company Registration Certificate:</span> Legal proof of your business.</li>
          <li><span className="font-semibold">Quality Manual:</span> Outlines your management system.</li>
          <li><span className="font-semibold">Process Flowcharts:</span> Maps key operations.</li>
          <li><span className="font-semibold">Employee Training Records:</span> Shows standard compliance training.</li>
          <li><span className="font-semibold">Internal Audit Reports:</span> Pre-certification audit results.</li>
          <li><span className="font-semibold">Risk Assessment Reports:</span> Identifies and mitigates risks.</li>
        </ul>

        {/* Costs */}
        <motion.h2
          className="text-3xl font-semibold text-blue-600 mt-12 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Costs of ISO Certificate Registration in Hyderabad
        </motion.h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Costs vary based on business size, process complexity, ISO type, and certification body. Contact us for a tailored quote!
        </p>
      </div>
    </div>
  );
}