import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-3 text-xl pt-4">Funiro</span>
            </a>
            <p className="mt-6 text-sm text-gray-500 mb-6">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center gap-6">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 mt-6">
                Links
              </h2>
              <nav className="list-none mb-10 space-y-6">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Home</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Shop</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">About</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Contact</a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 mt-6">
                Help
              </h2>
              <nav className="list-none mb-10 space-y-6">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Payment Options</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Returns</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Privacy Policies</a>
                </li>
              </nav>
            </div>

            {/* Newsletter Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 mt-6">
                Newsletter
              </h2>
              <div className="flex items-center mb-4">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="px-4 py-2 text-gray-700 border-b-2 border-transparent focus:outline-none focus:border-gray-500"
                />
                <button className="ml-2 text-blue-500 hover:text-blue-600 focus:outline-none">
                  SUBSCRIBE
                </button>
              </div>
              {/* Line Below the Input */}
              <div className="w-full mt-1 border-b-2 border-gray-300"></div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              2023 Furino. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
