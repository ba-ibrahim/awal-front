

const blogPosts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      date: "November 6, 2024",
      author: "Ibrahim",
      excerpt: "React Hooks introduced a powerful way to manage state and lifecycle in functional components. Learn the basics and how they can simplify your code...",
    },
    {
      id: 2,
      title: "Getting Started with Tailwind CSS",
      date: "October 15, 2024",
      author: "Ayman",
      excerpt: "Tailwind CSS is a utility-first CSS framework that allows rapid UI development. Discover how to set it up and use it in your projects...",
    },
    {
      id: 3,
      title: "JavaScript Tips for Beginners",
      date: "September 25, 2024",
      author: "Guest Author",
      excerpt: "Mastering JavaScript fundamentals is key to becoming a skilled developer. Here are some tips and tricks that can help you write better JavaScript...",
    },
  ];
export default function BlogPosts() { 
    return (
        <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Blog</h1>
        <div className="space-y-6">
            {blogPosts.map((post) => (
            <div key={post.id} className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-semibold text-blue-600">{post.title}</h2>
                <p className="text-gray-500 text-sm">
                {post.date} • By {post.author}
                </p>
                <p className="text-gray-700 mt-4">{post.excerpt}</p>
                <button className="mt-4 text-blue-500 font-semibold hover:underline">
                Read More
                </button>
            </div>
        ))}
      </div>
    </div>
)}

