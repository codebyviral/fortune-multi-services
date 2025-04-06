  export default function Registrations({ type }) {
    return (
      <div className="py-12">
        <br />
      <br />
      <br />
      <br />
      <br />
      <br />
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          {type === "company" ? "Company Registrations" : 
           type === "government" ? "Government Registrations" : 
           "All Registrations"}
        </h1>
        <p className="text-gray-600">Comprehensive registration services for your business needs.</p>
      </div>
    );
  }