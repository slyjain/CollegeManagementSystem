
import React from 'react';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Course Overview Card */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">Course Overview</h2>
          <p className="text-gray-600">Track your ongoing and completed courses.</p>
          {/* Example content */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Maths</span>
              <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">80% Complete</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Physics</span>
              <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">60% Complete</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Chemistry</span>
              <span className="bg-orange-100 text-orange-800 text-sm px-2 py-1 rounded">40% Complete</span>
            </div>
          </div>
        </div>

        {/* Progress Tracking Card */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">Progress Tracking</h2>
          <p className="text-gray-600">Monitor your progress and set study goals.</p>
          {/* Example content */}
          <div className="mt-4">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Overall Progress</span>
                <span className="text-lg font-bold">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full">
                <div className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '65%' }}>65%</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Daily Study Goal</h3>
              <p className="text-gray-600">Achieve 2 hours of study daily.</p>
            </div>
          </div>
        </div>

        {/* Upcoming Events Card */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">Upcoming Events</h2>
          <p className="text-gray-600">Stay updated with important dates.</p>
          {/* Example content */}
          <div className="mt-4">
            <div className="mb-4">
              <div className="text-lg font-medium mb-1">Next Test</div>
              <div className="text-gray-600">Physics Midterm - September 10, 2024</div>
            </div>
            <div>
              <div className="text-lg font-medium mb-1">Assignment Deadline</div>
              <div className="text-gray-600">Maths Assignment - September 15, 2024</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
