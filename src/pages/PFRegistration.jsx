import React from 'react';
import { Info, CheckCircle, FileText, AlertCircle, Calendar, User, HelpCircle } from 'lucide-react';
import { useEffect } from 'react';
const PFRegistrationPage = () => {
   useEffect(()=>{window.scrollTo(0,0)})
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
        <br>
        </br>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">Provident Fund (PF) Registration</h1>
        <p className="text-lg text-gray-600">A Comprehensive Guide for Employers and Employees</p>
      </header>

      <section className="mb-10 bg-blue-50 p-6 rounded-lg">
        <div className="flex items-start gap-4">
          <Info className="text-blue-600 mt-1 flex-shrink-0" size={24} />
          <div>
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Introduction to PF Registration</h2>
            <p className="mb-4">
              The <strong>Employees' Provident Fund (EPF)</strong> is a social security scheme managed by the 
              <strong> Employees' Provident Fund Organization (EPFO), Government of India</strong>. It provides 
              financial security and retirement benefits to employees.
            </p>
            <div className="bg-yellow-50 p-3 rounded-md border-l-4 border-yellow-500">
              <p className="font-medium">
                PF registration is mandatory for businesses with 20 or more employees and voluntary for others.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 border-b pb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
          <FileText className="text-blue-600" size={20} />
          What is the Employees' Provident Fund (EPF)?
        </h2>
        <p className="mb-4">
          EPF is a savings scheme where both the employer and employee contribute 12% of the employee's 
          basic salary + DA every month. The fund grows with interest and can be withdrawn upon 
          retirement, resignation, or under special conditions.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 bg-gray-50 p-4 rounded-md">
            <p className="font-medium text-gray-700">Managed by:</p>
            <p>Employees' Provident Fund Organization (EPFO)</p>
          </div>
          <div className="flex-1 bg-gray-50 p-4 rounded-md">
            <p className="font-medium text-gray-700">Governing Law:</p>
            <p>Employees' Provident Funds and Miscellaneous Provisions Act, 1952</p>
          </div>
          <div className="flex-1 bg-gray-50 p-4 rounded-md">
            <p className="font-medium text-gray-700">Objective:</p>
            <p>To provide financial security and pension benefits to employees after retirement</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-700 mb-3">Key Components of PF</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-gray-300 p-3 text-left">Component</th>
                <th className="border border-gray-300 p-3 text-left">Employee Contribution</th>
                <th className="border border-gray-300 p-3 text-left">Employer Contribution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3"><strong>Provident Fund (PF)</strong></td>
                <td className="border border-gray-300 p-3">12% of Basic Salary</td>
                <td className="border border-gray-300 p-3">3.67% of Basic Salary</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3"><strong>Employee Pension Scheme (EPS)</strong></td>
                <td className="border border-gray-300 p-3">0%</td>
                <td className="border border-gray-300 p-3">8.33% of Basic Salary (up to ₹15,000)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3"><strong>Employee Deposit Linked Insurance (EDLI)</strong></td>
                <td className="border border-gray-300 p-3">0%</td>
                <td className="border border-gray-300 p-3">0.50% of Basic Salary</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex gap-8 flex-col md:flex-row">
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>Interest on PF:</strong> Currently around 8% per annum, compounded annually.</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>Pension Benefits:</strong> Employees receive a monthly pension after retirement if they have contributed to EPS for at least 10 years.</p>
          </div>
        </div>
      </section>

      <section className="mb-10 border-b pb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
          <User className="text-blue-600" size={20} />
          Who Needs PF Registration?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>Mandatory for businesses with 20+ employees</strong></p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>Voluntary for businesses with fewer than 20 employees</strong></p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>Applicable to both private and public sector employees</strong></p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>Self-employed individuals can opt for voluntary PF contribution</strong></p>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-500 mt-4">
          <p>If an employee earns less than ₹15,000/month, EPF registration is compulsory.</p>
        </div>
      </section>

      <section className="mb-10 border-b pb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
          <CheckCircle className="text-blue-600" size={20} />
          Benefits of PF Registration
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>Retirement Savings:</strong> Ensures financial security after retirement.</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>Tax-Free Returns:</strong> EPF contributions and interest are tax-free under Section 80C of the Income Tax Act.</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>Pension Benefits:</strong> Eligible employees receive a monthly pension under EPS.</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>Insurance Coverage:</strong> The EDLI scheme provides a life insurance cover of up to ₹7 lakh.</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>Loan Facility:</strong> Employees can take loans against PF for housing, medical emergencies, and education.</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>Easy Transfer:</strong> Employees can transfer their PF when switching jobs through Universal Account Number (UAN).</p>
          </div>
        </div>
      </section>

      <section className="mb-10 border-b pb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
          <FileText className="text-blue-600" size={20} />
          Step-by-Step Process for PF Registration
        </h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold text-gray-800 mb-2">Step 1: Visit the EPFO Portal</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-medium">•</span>
                <p>Go to <strong>https://unifiedportal-emp.epfindia.gov.in/</strong></p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-medium">•</span>
                <p>Click on <strong>Establishment Registration</strong> and sign up using your company details and PAN.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold text-gray-800 mb-2">Step 2: Register on the Shram Suvidha Portal</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-medium">•</span>
                <p>Visit <strong>https://shramsuvidha.gov.in/</strong></p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-medium">•</span>
                <p>Login and fill out the <strong>Employer Registration Form</strong> with company details.</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-medium">•</span>
                <p>Upload the required <strong>business and employee documents</strong>.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold text-gray-800 mb-2">Step 3: Submit PF Application</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-medium">•</span>
                <p>Fill out <strong>Form 5A</strong> (Ownership Details) and <strong>Digital Signature Certificate (DSC)</strong>.</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-medium">•</span>
                <p>Provide <strong>employee details, salary breakup, and company bank account</strong>.</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-medium">•</span>
                <p>Submit the application and pay the <strong>registration fee (if applicable)</strong>.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold text-gray-800 mb-2">Step 4: Receive PF Registration Number (Establishment Code)</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-medium">•</span>
                <p>Once approved, EPFO issues a <strong>PF Registration Number</strong> (also known as the <strong>Establishment Code</strong>).</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-medium">•</span>
                <p>Employers must <strong>generate UAN numbers</strong> for employees via the EPFO portal.</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-500 mt-6">
          <p>Employees can activate their PF accounts using UAN on the EPFO Member Portal.</p>
        </div>
      </section>

      <section className="mb-10 border-b pb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
          <FileText className="text-blue-600" size={20} />
          Documents Required for PF Registration
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>Company PAN Card</strong></p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>Certificate of Incorporation</strong> (For Companies, LLPs, Partnerships)</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>GST Certificate</strong></p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>Bank Account Details</strong> (Cancelled Cheque)</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>Address Proof</strong> (Electricity Bill, Rent Agreement, etc.)</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>List of Directors/Partners/Proprietor</strong></p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>Digital Signature Certificate (DSC)</strong> of Employer</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>Employee Details</strong> (Aadhaar, PAN, Salary Structure, DOJ, etc.)</p>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-500 mt-6">
          <p>Ensure all documents are clear and updated for smooth processing.</p>
        </div>
      </section>

      <section className="mb-10 border-b pb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
          <User className="text-blue-600" size={20} />
          Employer and Employee Responsibilities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Employer's Responsibilities</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                <p><strong>Deduct PF contributions (12% of salary)</strong> from employees' salaries.</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                <p><strong>Deposit PF contributions</strong> (both employee and employer share) by the 15th of every month.</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                <p><strong>Maintain accurate employee records</strong> and update UAN details.</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                <p><strong>File PF returns</strong> (Form 5, Form 10, Form 12A) on time.</p>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Employee's Responsibilities</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                <p><strong>Check PF balance regularly</strong> using UAN on EPFO portal.</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                <p><strong>Update KYC details</strong> for easy withdrawal.</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                <p><strong>Transfer PF while switching jobs</strong> using UAN.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10 border-b pb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
          <Calendar className="text-blue-600" size={20} />
          PF Withdrawal Rules
        </h2>
        
        <p className="mb-4">Employees can withdraw PF in the following cases:</p>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 font-medium">1</div>
            <div>
              <p><strong>Retirement (after 58 years)</strong> – Full withdrawal of EPF & EPS.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 font-medium">2</div>
            <div>
              <p><strong>Resignation (before 58 years)</strong> – Partial withdrawal possible after <strong>2 months of unemployment</strong>.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 font-medium">3</div>
            <div>
              <p><strong>Medical Emergency, Marriage, Education</strong> – <strong>Partial withdrawal allowed</strong>.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 font-medium">4</div>
            <div>
              <p><strong>Home Loan Repayment or House Construction</strong> – Up to <strong>90% of PF balance</strong> can be withdrawn.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-500 mt-6">
          <p>PF withdrawals are tax-free if withdrawn after 5 years of continuous service.</p>
        </div>
      </section>

      <section className="mb-10 border-b pb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
          <AlertCircle className="text-blue-600" size={20} />
          PF Contribution Due Date & Penalties for Non-Compliance
        </h2>
        
        <div className="bg-blue-50 p-4 rounded-md mb-6">
          <p className="font-medium">Monthly PF deposit deadline: 15th of the following month.</p>
        </div>
        
        <h3 className="font-semibold text-gray-800 mb-3">Penalties for Late Payment of PF Contributions</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <AlertCircle className="text-red-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>Interest for late payment</strong> – 12% per annum</p>
          </li>
          <li className="flex items-start gap-2">
            <AlertCircle className="text-red-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>Penalty charges</strong> – Ranges from 5% to 25% per annum</p>
          </li>
        </ul>
        
        <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-500 mt-6">
          <p>Non-compliance can lead to legal action against the employer.</p>
        </div>
      </section>

      <section className="mb-10 border-b pb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
          <HelpCircle className="text-blue-600" size={20} />
          How to Check PF Balance?
        </h2>
        
        <p className="mb-4">Employees can check their PF balance via:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>EPFO Portal:</strong> Login with UAN at <strong>https://www.epfindia.gov.in/</strong></p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>UMANG App:</strong> Download the mobile app and link UAN.</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>Missed Call Service:</strong> Dial <strong>9966044425</strong> from the registered mobile number.</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
            <p><strong>SMS Service:</strong> Send <strong>"EPFOHO UAN ENG"</strong> to <strong>7738299899</strong>.</p>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-500 mt-6">
          <p>Ensure your UAN is linked to Aadhaar, PAN, and mobile for access.</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-blue-800 mb-6 flex items-center gap-2">
          <HelpCircle className="text-blue-600" size={20} />
          Frequently Asked Questions (FAQs) on PF Registration
        </h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold text-gray-800 mb-2">1. Is PF registration mandatory?</h3>
            <p>Yes, for businesses with <strong>20+ employees</strong>. Optional for others.</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold text-gray-800 mb-2">2. Can an employee opt out of PF?</h3>
            <p>Employees earning <strong>above ₹15,000/month can opt out</strong>, but they must do so at the time of joining.</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold text-gray-800 mb-2">3. Can I withdraw my PF before retirement?</h3>
            <p>Yes, but only under specific conditions such as <strong>medical emergency, home loan, marriage, or job loss</strong>.</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold text-gray-800 mb-2">4. What is the interest rate on PF?</h3>
            <p>The current <strong>EPF interest rate is 8% per annum</strong>.</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold text-gray-800 mb-2">5. How to transfer PF when changing jobs?</h3>
            <p>Use the <strong>UAN portal to request a transfer online</strong>.</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold text-gray-800 mb-2">6. Is PF contribution taxable?</h3>
            <p>No, <strong>EPF contributions and interest are tax-free</strong> under Section 80C.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Conclusion</h2>
        <p className="mb-4">
          Provident Fund (PF) registration is <strong>mandatory for businesses and beneficial for employees</strong>. 
          It ensures <strong>financial security, pension benefits, and tax savings</strong>. 
          Employers must <strong>comply with EPFO regulations</strong> to avoid penalties.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg text-center mt-6">
          <p className="text-lg font-medium text-blue-800">
            Want to register for PF? Apply online and secure your employees' future today!
          </p>
        </div>
      </section>
    </div>
  );
};

export default PFRegistrationPage;