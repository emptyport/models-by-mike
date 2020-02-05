import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-300">
      <Header />

      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full bg-gray-800">
        {children}
      </main>

      <footer className="bg-gray-900 neu-border w-11/12 mx-auto my-2 rounded-lg">
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-tiny text-gray-500">
          <p>Made by Mike</p>
          <Link className="no-underline" to="/privacy">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
