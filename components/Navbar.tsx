'use client';
import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <nav className='h-16 bg-white dark:bg-black shadow px-4 py-3 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <img
            src={isDarkMode ? '/logo-white.png' : '/logo-black.png'}
            alt='Logo'
            className='h-23 object-contain'
          />
        </div>


        <ul className='flex gap-6 text-black dark:text-white font-medium mr-6'>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className='text-black dark:text-white cursor-pointer'
          >
            {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About Us</a>
          </li>
          <li>
            <a href='#'>Search</a>
          </li>
          <li>
            <a href='#'>Profile</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
