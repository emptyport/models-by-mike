import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />
      <section>
        <form className="mx-auto md:w-1/2 text-gray-300">
          <p className="mb-8 leading-loose">Get in touch!</p>

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="first-name"
          >
            First Name
          </label>

          <input
            className="w-full mb-6 form-input neu-inset bg-gray-800 border-0 rounded-lg"
            id="first-name"
            placeholder="Phillip"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="last-name"
          >
            Last Name
          </label>

          <input
            className="w-full mb-6 form-input neu-inset bg-gray-800 border-0 rounded-lg"
            id="last-name"
            placeholder="Fry"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            className="w-full mb-6 form-textarea neu-inset bg-gray-800 border-0 rounded-lg"
            id="message"
            placeholder="Say something..."
            rows="8"
          />

          <button className="px-4 py-2 text-sm font-bold neu-border-button rounded-lg">
            Submit
          </button>
        </form>
      </section>
    </Layout>
  );
}

export default ContactPage;
