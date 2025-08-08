import React, { useState } from 'react';
import { Mail, Users, Home, XCircle } from 'lucide-react'; // Using lucide-react for icons

// The main App component that handles the overall layout and page navigation
// Think of this as the master controller for our single-page application.
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Renders the appropriate page component based on the currentPage state.
  // This is how we switch between the different views.
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'volunteer':
        return <VolunteerForm />;
      case 'about':
        return <AboutUs />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-gray-50 font-sans min-h-screen flex flex-col antialiased">
      {/* Our navigation bar to move between pages. It's sticky so it's always at the top! */}
      <nav className="bg-white shadow-lg p-4 sticky top-0 z-50">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">
            Basti Ki Pathshala Foundation
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
            <button
              onClick={() => setCurrentPage('home')}
              className={`flex items-center space-x-2 text-lg font-medium transition-colors duration-300 ${
                currentPage === 'home' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              <Home size={20} />
              <span>Home</span>
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className={`flex items-center space-x-2 text-lg font-medium transition-colors duration-300 ${
                currentPage === 'about' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              <Users size={20} />
              <span>About Us</span>
            </button>
            <button
              onClick={() => setCurrentPage('volunteer')}
              className={`flex items-center space-x-2 text-lg font-medium transition-colors duration-300 ${
                currentPage === 'volunteer' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              <Mail size={20} />
              <span>Volunteer</span>
            </button>
          </div>
        </div>
      </nav>

      {/* This is where the magic happens - our main content area where pages are rendered. */}
      <main className="flex-grow p-8">
        {renderPage()}
      </main>

      {/* A simple footer to keep things tidy at the bottom. */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Basti Ki Pathshala Foundation. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// A simple modal component to display messages instead of using a standard alert.
const Modal = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-[100]">
      <div className="bg-white rounded-xl shadow-2xl p-6 m-4 max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <XCircle size={24} />
          </button>
        </div>
        <p className="text-gray-700">{message}</p>
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Home Page Component
const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto p-6 md:p-12">
      <div className="bg-indigo-600 text-white rounded-3xl shadow-xl overflow-hidden md:flex md:items-center">
        <div className="md:w-1/2 p-8 md:p-16">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Where learning knows no boundaries.
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light opacity-90">
            Join us in our mission to break the barriers of education in underserved communities. With your support, we can empower children with the knowledge and skills they need to build a brighter future.
          </p>
          {/* This button now opens a modal for a more interactive feel. */}
          <button
            className="mt-8 bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-100 transform hover:scale-105 transition-all duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            Donate Now
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://placehold.co/1200x800/6366f1/ffffff?text=Education+for+All"
            alt="A group of children smiling while learning"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Thank You for Your Support!"
        message="Your generous donation helps us provide essential resources and education to children in need. We appreciate your kindness!"
      />
    </div>
  );
};

// Volunteer Form Component
const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Instead of a plain alert, we show a friendly modal.
    setIsModalOpen(true);
    // In a real app, this is where you'd send data to a server.
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Join Our Team as a Volunteer</h2>
        <p className="text-center text-gray-600 mb-8">
          Ready to be a part of the movement? Fill out the form below and help us make a tangible difference in the lives of children.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tell us about your skills and interests</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit Application
          </button>
        </form>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Thank You, Volunteer!"
        message="We've received your application and will be in touch shortly. Your interest in helping makes a huge difference!"
      />
    </div>
  );
};

// About Us Component
const AboutUs = () => (
  <div className="container mx-auto p-6 md:p-12">
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-6">Our Mission & Story</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Basti Ki Pathshala Foundation began with a simple yet powerful vision: to transform the lives of children living in slum areas through education. Founded under the Indian Societies Act of 1860, our journey is rooted in the belief that every child has potential, regardless of their circumstances. We are a movement dedicated to providing quality education and fostering long-term, sustainable change.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is clear: to break the barriers of education in underserved communities. We create a nurturing learning environment where every child can access the tools, resources, and support they need to unlock their full potential. Through innovative teaching methods and community engagement, we empower children with the knowledge and skills necessary to build a brighter future for themselves and their communities.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="https://placehold.co/800x600/6366f1/ffffff?text=Our+Mission"
            alt="A group of diverse people working together"
            className="rounded-2xl shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
);
  