import React, { useState, useEffect } from "react";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
	const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
				setLoading(true);
				const response = await fetch("/blogPosts.json");
        const data = await response.json();
        setBlogPosts(data.blogPosts);
      } catch (error) {
				console.error("Error loading blog posts:", error);
			} finally {
				setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

	if (loading) {
		return <LoadingSpinner />;
	}

	if (blogPosts.length === 0 && !loading) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
						<p className="text-lg text-gray-600">No blog posts found.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 mt-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            React Interview Questions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
						Explore common React interview questions and their detailed answers
						to enhance your understanding of React concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:translate-y-[-4px] transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {post.answer}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <FaUser className="text-blue-500" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCalendarAlt className="text-blue-500" />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
