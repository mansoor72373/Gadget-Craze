import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900  mt-10 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="grid grid-cols-1 lg:flex lg:justify-evenly md:flex md:justify-evenly sm:grid-cols-2 md:grid-cols-4 gap-8 py-6 lg:py-8">
          <div className="flex flex-col  items-center ">
            <h2 className="mb-6 font-semibold text-white text-lg uppercase">Company</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium text-center">
              <li className="mb-4">
                <Link to="/components/AboutPage" className="hover:underline">About</Link>
              </li>
              <li className="mb-4">
                <Link to="/components/AboutPage" className="hover:underline">Careers</Link>
              </li>
              <li className="mb-4">
                <Link to="/blog" className="hover:underline">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="mb-6 text-lg font-semibold text-white uppercase dark:text-white">Help center</h2>
            <ul className="text-gray-500 dark:text-gray-500 font-medium text-center">
              <li className="mb-4">
                <Link to="https://x.com/its_mansoor07?t=PDruyVoCnOr8mF3pm2kdAQ&s=09" className="hover:underline">Twitter</Link>
              </li>
              <li className="mb-4">
                <Link to="https://www.linkedin.com/in/mansoor-ahmad-26a232217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:underline">Linkedin</Link>
              </li>
              <li className="mb-4">
                <Link to="/contact" className="hover:underline">Contact Us</Link>
              </li>
            </ul>
          </div>
        
          <div className="flex flex-col items-center">
            <h2 className="mb-6 text-lg font-semibold text-white uppercase dark:text-white">Download</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium text-center">
              <li className="mb-4">
                <Link to="/download/ios" className="hover:underline">iOS</Link>
              </li>
              <li className="mb-4">
                <Link to="/download/android" className="hover:underline">Android</Link>
              </li>
              <li className="mb-4">
                <Link to="/download/windows" className="hover:underline">Windows</Link>
              </li>
              <li className="mb-4">
                <Link to="/download/macos" className="hover:underline">MacOS</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-blue-900 dark:bg-gray-700 flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-gray-300 text-center">
            © 2024 <Link to="#">Gadget Craze™</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 justify-center space-x-5 rtl:space-x-reverse">
            <Link to="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">Facebook page</span>
             
            </Link>
            <Link to="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">Twitter page</span>
              
            </Link>
            <Link to="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">GitHub account</span>
              
            </Link>
            <Link to="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">Other social</span>
          
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
