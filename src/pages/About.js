import React from 'react';

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center">
      <div className=" bg-blue-100  max-w-4xl p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">About Us</h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Welcome to our website! We are a passionate team committed to providing excellent service and creating amazing experiences.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Our mission is to deliver high-quality products and services to our customers. We believe in customer satisfaction, continuous improvement, and innovation. Our team is dedicated to making your experience enjoyable and seamless.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          We value collaboration, creativity, and a positive work environment. Our team consists of highly skilled professionals who are always ready to take on new challenges and provide innovative solutions.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="/contact"
            className="px-6 py-2 bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
