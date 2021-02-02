import { Link } from "gatsby";
import React, { useState } from "react";

import Logo from "../images/icons/logo.svg";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className=" z-10 w-full mx-auto my-2 rounded-lg">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4">
        <Link
          className="flex items-center no-underline text-gray-700 md:w-1/4 w-1/2"
          to="/"
        >
          <Logo className="fill-current" />
        </Link>

        <button
          className="block md:hidden neu-border-button flex items-center px-3 py-2 rounded text-gray-500"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-6 w-6"
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
              title: `Home`,
            },
            // {
            //   route: "/twerking-alien",
            //   title: "Twerking Alien",
            // },
            // {
            //   route: `/about`,
            //   title: `About`,
            // },
            {
              route: `/contact`,
              title: `Contact`,
            },
            // {
            //   route: `/bugs`,
            //   title: `Bugs`,
            // },
            {
              route: `/blog`,
              title: `Blog`,
            },
          ].map((link) => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline font-bold text-gray-700"
              activeClassName="border-b-2 border-red-500"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
          {/* <a
            className="block md:inline-block mt-4 md:mt-0 md:ml-6"
            href="https://www.buymeacoffee.com/modelsbymike3d"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              title="Buy Me A Coffee"
              alt="Buy Me A Coffee"
              className="w-32"
            />
          </a> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
