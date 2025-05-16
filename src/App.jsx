import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-6">
        Website Temporarily Down
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mb-4">
        We are currently processing a pending payment refund for one of our clients.
      </p>
      <p className="text-lg text-gray-700 max-w-xl">
        The website will be up and running again as soon as the refund is completed.
        We apologize for the inconvenience and appreciate your patience.
      </p>
    </div>
  );
}

export default App;
