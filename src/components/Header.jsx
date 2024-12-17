

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-green-800 p-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="text-white font-bold text-lg">
        MyCompany
      </div>

      {/* Navigation Section */}
      <div className="space-x-6 text-white">
        <Link to="/main" className="hover:text-blue-500">Main</Link>
        <Link to="/about" className="hover:text-blue-500">About</Link>
        <Link to="/contact" className="hover:text-blue-500">Contact</Link>
      </div>
    </div>
  );
}

export default Header;
