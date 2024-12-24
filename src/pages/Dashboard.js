import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Fetch user data if authenticated
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');  // Assuming JWT is stored in localStorage

      if (!token) {
        // If there's no token, redirect to login page
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('http://localhost:8000/api/user/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (err) {
        setError('Failed to load user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Welcome to Your Dashboard</h1>
        {userData ? (
          <div className="space-y-4">
            <div className="text-lg font-medium text-gray-700">
              <p><strong>Name:</strong> {userData.name}</p>
              <p><strong>Email:</strong> {userData.email}</p>
            </div>
            
            {/* Optionally, you can add sections for user-specific blogs */}
            <div className="space-y-4 mt-6">
              <h2 className="text-2xl font-semibold text-gray-800">Your Blogs</h2>
              {userData.blogs && userData.blogs.length > 0 ? (
                <ul className="space-y-4">
                  {userData.blogs.map((blog) => (
                    <li key={blog.id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                      <h3 className="text-xl font-medium text-gray-800">{blog.title}</h3>
                      <p className="text-gray-600">{blog.content}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No blogs found.</p>
              )}
            </div>
          </div>
        ) : (
          <p>No user data available</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
