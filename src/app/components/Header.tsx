'use client'; // Ensure the component is client-side

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for App Router
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

type HeaderProps = {
  characterName: string;
};

const Header: React.FC<HeaderProps> = ({ characterName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter(); // Correct hook for App Router

  useEffect(() => {
    // Check localStorage on component mount
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    router.push('/signin'); // Using router from next/navigation
  };

  return (
    <header className="text-white rounded-lg p-5 bg-blue-950">
      <div className="container mx-auto flex justify-between items-center">
        {/* ChannelName and other links */}
        <div className="flex items-center space-x-6">
          <p className="font-bold text-yellow-400 hover:underline"> {characterName}</p>
          <a href="#" className="text-yellow-400 hover:underline">Home</a>
          <div className="relative group hidden md:block">
            <button className="text-yellow-400 hover:underline">Browser</button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">Option 1</a>
              <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">Option 2</a>
              <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">Option 3</a>
            </div>
          </div>
          <a href="#" className="text-yellow-400 hover:underline hidden md:block">MyLibrary</a>
        </div>

        {/* Sign In/Out button */}
        <nav className="hidden md:block">
          {isLoggedIn ? (
            <button
              onClick={handleSignOut}
              className="bg-yellow-400 text-black py-2 px-4 rounded-full hover:bg-yellow-300"
            >
              Sign Out
            </button>
          ) : (
            <a href="/signin" className="bg-yellow-400 text-black py-2 px-4 rounded-full hover:bg-yellow-300">Sign In</a>
          )}
        </nav>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-yellow-400 hover:text-yellow-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-blue-950 bg-opacity-75 z-50 md:hidden transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-6 text-white">
          {/* Close Button */}
          <button
            className="self-end text-yellow-400 hover:text-yellow-300 mb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          <a href="#" className="text-yellow-400 hover:underline mb-4">ChannelName</a>
          <a href="#" className="text-yellow-400 hover:underline mb-4">Home</a>
          <button className="text-yellow-400 hover:underline mb-4">Browser</button>
          <a href="#" className="text-yellow-400 hover:underline mb-4">MyLibrary</a>
          {isLoggedIn ? (
            <button
              onClick={handleSignOut}
              className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-300"
            >
              Sign Out
            </button>
          ) : (
            <a href="/signin" className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-300">Sign In</a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
