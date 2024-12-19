import React from 'react';

const lessons = [
  {
    id: 1,
    title: 'Introduction to Programming',
    description: 'Learn the basics of programming, including variables, loops, and functions.',
    instructor: 'Jane Doe',
  },
  {
    id: 2,
    title: 'Web Development Fundamentals',
    description: 'Dive into HTML, CSS, and JavaScript to create your first web page.',
    instructor: 'John Smith',
  },
  {
    id: 3,
    title: 'Data Structures and Algorithms',
    description: 'Understand the foundational data structures like arrays, linked lists, and trees.',
    instructor: 'Emily Clark',
  },
];

function LessonsPage() {
  return (
    <div className="w-4/5 mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-center mb-8">Lessons</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">{lesson.title}</h2>
            <p className="text-gray-700 mb-4">{lesson.description}</p>
            <p className="text-gray-500">Instructor: {lesson.instructor}</p>
            <div className="mt-4 text-center">
              <button
                className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
                onClick={() => alert(`Viewing lesson: ${lesson.title}`)}
              >
                View Lesson
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LessonsPage;
