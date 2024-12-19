import { NavLink } from "react-router-dom";
import BlogPosts from "./components/BlogPosts";



export default function Blog() { 
    const isLoggedIn = false;
    return (
        <>
            { !isLoggedIn && (
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl text-center">
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Page</h1>
                  <p className="text-lg text-gray-600 mb-6">
                    Welcome to the blog page! This is where you can find articles and updates about <span className="font-semibold text-blue-500">AWAL</span>.
                  </p>
                  <p className="text-md text-gray-500 mb-6">
                    Please log in to view our latest blog posts and stay up-to-date with the newest articles.
                  </p>
                  <NavLink
                    to="/login"
                    className="inline-block bg-blue-500 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-600 transition duration-200"
                  >
                    Login to View Posts
                  </NavLink>
                </div>
              </div>
            )}

            {
                isLoggedIn && (
                    <BlogPosts/>
                )
            }
        </>
)}