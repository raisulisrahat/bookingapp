import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Left section - Links */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Center section - Logo / Branding */}
          <div className="mb-4 md:mb-0 text-center">
            <h2 className="text-2xl font-bold">YourCompany</h2>
            <p className="text-sm mt-2">Your tagline or slogan here.</p>
          </div>

          {/* Right section - Social media icons */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook fa-lg hover:text-blue-500"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter fa-lg hover:text-blue-400"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram fa-lg hover:text-pink-500"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin fa-lg hover:text-blue-700"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
