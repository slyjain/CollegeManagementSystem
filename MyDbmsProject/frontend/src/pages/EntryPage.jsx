
import React from 'react';
import { Link } from 'react-router-dom';

function EntryPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to College Management System</h1>
      <p className="text-lg mb-6">Manage students, courses, and more with ease.</p>
      <Link to="/login">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
          Login
        </button>
      </Link>
    </div>
  );
}

export default EntryPage;
