"use client";

import { Link } from "@nextui-org/link";
import React from "react";

export default function Home() {
  return (
    <section className="flex flex-col items-start py-16 px-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      {/* Welcome Section */}
      <div className="max-w-4xl mb-16 text-left">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6 leading-tight">
          Manage Your University With Ease
        </h1>
        <p className="text-md text-gray-700 leading-loose">
          Centralize your university's operations in a single place. Organize classrooms, 
          manage personnel, track courses, and streamline administrative tasks effortlessly.
        </p>
      </div>

      {/* Action Links */}
      <div className="flex flex-col sm:flex-row gap-8 mb-16">
        <Link href="/academics">
          <div className="bg-red-600 text-white py-3 px-8 rounded-xl shadow-lg hover:bg-red-700 hover:shadow-md transition-all transform hover:-translate-y-1">
            Add New Entry
          </div>
        </Link>
        <Link href="/academics">
          <div className="bg-purple-600 text-white py-3 px-8 rounded-xl shadow-lg hover:bg-purple-700 hover:shadow-md transition-all transform hover:-translate-y-1">
            View All Entries
          </div>
        </Link>
      </div>

      {/* Dashboard Overview */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl">
        <div className="bg-white p-6 rounded-2xl shadow-md text-left hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800">Total Students</h2>
          <p className="text-4xl font-bold text-gray-900 mt-4">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md text-left hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800">Total Instructors</h2>
          <p className="text-4xl font-bold text-gray-900 mt-4">123</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md text-left hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800">Courses Offered</h2>
          <p className="text-4xl font-bold text-gray-900 mt-4">45</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md text-left hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800">Classroom Capacity</h2>
          <p className="text-4xl font-bold text-gray-900 mt-4">2,500</p>
        </div>
      </div>
    </section>
  );
}
