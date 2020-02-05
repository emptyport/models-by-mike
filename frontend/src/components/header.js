import { Link } from "gatsby";
import React, { useState } from "react";

import logo from "../images/logo.png";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-gray-900 z-10 neu-border w-11/12 mx-auto my-2 rounded-lg">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
        <Link
          className="flex items-center no-underline text-gray-300 w-1/2"
          to="/"
        >
          <img alt="Models By Mike Logo" className="" src={logo} />
        </Link>

        <button
          className="block md:hidden neu-border-button flex items-center px-3 py-2 rounded text-gray-300"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-4 w-4"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/`,
              title: `Home`
            },
            {
              route: `/about`,
              title: `About`
            },
            {
              route: `/contact`,
              title: `Contact`
            }
          ].map(link => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-gray-300"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
