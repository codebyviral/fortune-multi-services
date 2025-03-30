import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUsPage from "./pages/AboutUsPage";
import ContactForm from "./pages/ContactForm";
import Registrations from "./pages/Registration";


import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        {/* Main content area */}
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Registration Routes */}
            <Route path="/registrations" element={<Registrations />} />
            <Route path="/registrations/company" element={<Registrations type="company" />} />
            <Route path="/registrations/government" element={<Registrations type="government" />} />
            <Route path="/our_profile/aboutuspage" element={<AboutUsPage />} />
            <Route path="/our_profile/contact-us" element={<ContactForm />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      {/* add change */}
      <Footer/>
    </Router>
  );
}

export default App;