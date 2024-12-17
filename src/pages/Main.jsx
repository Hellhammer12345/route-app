import React from 'react';

const Main = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">My Name: Temur Bolkvadze</h1>
        <p className="text-lg text-gray-600">
          Welcome to my app. This is a simple page to display my name and some information about me.
        </p>
      </div>
    </div>
  );
}

export default Main;
