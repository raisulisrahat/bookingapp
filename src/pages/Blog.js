import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from the backend API when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8000/api/blog/')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
      });
  }, []);

  return (
    <div className='p-5 items-center '>
      <h1 className=' text-center font-mono font-extrabold text-3xl'>Blog Posts</h1>
      <div className="mx-auto p-5 text-center">
        {blogs.length > 0 ? (
          blogs.map(blog => (
            <div key={blog.id} className="flex container">
              <h2 className='font-semibold' >{blog.title}</h2>
              <p className='p-2'>By {blog.author} | {new Date(blog.created_at).toLocaleDateString()}</p>
              <p className='font-mono'>{blog.content.substring(0, 150)}...</p> {/* Display a short excerpt */}
            </div>
          ))
        ) : (
          <p>No blog posts available.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
