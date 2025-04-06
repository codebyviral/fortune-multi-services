import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Helmet } from "react-helmet";
import { useEffect } from 'react';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    mobileNo: '',
    email: '',
    requirement: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.mobileNo.trim()) {
      newErrors.mobileNo = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobileNo.trim())) {
      newErrors.mobileNo = 'Please enter a valid 10-digit mobile number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.requirement.trim()) {
      newErrors.requirement = 'Please enter your requirement';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validate()) {
      // Format message for WhatsApp
      const message = `Hi FORTUNE MULTI SERVICES,\n\nI would like to request a quote:\n\nEmail: ${formData.email}\nMobile: ${formData.mobileNo}\nRequirement: ${formData.requirement}`;
      
      // Encode message for URL
      const encodedMessage = encodeURIComponent(message);
      
      // Redirect to WhatsApp with prefilled message
      window.open(`https://wa.me/918919051513?text=${encodedMessage}`, '_blank');
      
      // Reset form after submission
      setFormData({
        mobileNo: '',
        email: '',
        requirement: ''
      });
    }
    setIsSubmitting(false);
  };
  useEffect(()=>{window.scrollTo(0,0)})
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact Information */}

<Helmet>
  <title>Contact Us | Fortune Multi Services</title>
  <meta
    name="description"
    content="Get in touch with Fortune Multi Services for expert guidance on business registration, taxation, licensing, and more. We're here to help you grow."
  />
  <meta
    name="keywords"
    content="contact Fortune Multi Services, get in touch, business support, consultation, service inquiry, registration help, GST support, FSSAI help, legal support"
  />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Get in Touch | Fortune Multi Services" />
  <meta
    property="og:description"
    content="Reach out to Fortune Multi Services for fast and professional business solutions. We respond quickly to your needs."
  />
  <meta property="og:url" content="https://fortunemultiservices.in/contact-us" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://fortunemultiservices.in/assets/contact-preview.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Talk to Our Experts | Fortune Multi Services" />
  <meta
    name="twitter:description"
    content="Need help with business services? Contact us today to speak with an expert."
  />
  <meta name="twitter:image" content="https://fortunemultiservices.in/assets/contact-preview.png" />

  <link rel="canonical" href="https://fortunemultiservices.in/contact-us" />
</Helmet>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Registered office</h2>
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-800">
                FORTUNE MULTI SERVICES
              </h2>
        <br/>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-full text-blue-600">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Our Address</h3>
              <p className="text-gray-600">
              Plot no 178&179, Flat No 303, Damarhu Construction,<br />
              Mahadevpuram colony, Usha Mullapudi Rd,<br />
              Kukatpally, Hyderabad, Telangana 500072
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-full text-green-600">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone Number</h3>
              <p className="text-gray-600">+91 89190 51513</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-full text-purple-600">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Email Us</h3>
              <p className="text-gray-600">fortunemultiservices2023@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Request A Free Quote</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700 mb-1">
              Mobile No <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="mobileNo"
              name="mobileNo"
              placeholder="Enter 10-digit mobile number"
              value={formData.mobileNo}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.mobileNo ? 'border-red-500' : 'border-gray-300'
              }`}
              maxLength="10"
            />
            {errors.mobileNo && (
              <p className="mt-1 text-sm text-red-600">{errors.mobileNo}</p>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="requirement" className="block text-sm font-medium text-gray-700 mb-1">
              Requirement <span className="text-red-500">*</span>
            </label>
            <textarea
              id="requirement"
              name="requirement"
              placeholder="Describe your requirement..."
              value={formData.requirement}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.requirement ? 'border-red-500' : 'border-gray-300'
              }`}
              rows="5"
            ></textarea>
            {errors.requirement && (
              <p className="mt-1 text-sm text-red-600">{errors.requirement}</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit via WhatsApp'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;