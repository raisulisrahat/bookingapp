import React from 'react';
import BookingTabs from '../components/BookingTabs';

const Home = () => {
  return (
    <div className="h-full w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30">
      
      {/* Video Background Section */}
      <section className="min-h-screen relative">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src="/assets/vid/4k.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for video readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Content container */}
        <div className="container mx-auto relative z-10 flex flex-col items-center justify-center min-h-screen">
          {/* Booking Tabs Component */}
          <BookingTabs />
        </div>
      </section>

      {/* Main Content Section for Blogs */}
      <main className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-6">New Blogs</h1>
          {/* Blog post cards or content will go here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example blog post */}
            <div className=" bg-orange-100 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-2">Blog Post Title</h2>
              <p className="text-gray-700">This is a short excerpt from the blog post. More details...</p>
            </div>
            {/* Repeat for more blog posts */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;






