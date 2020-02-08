import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import olcBadge from "../images/OLC_badge.png";

function TwerkingAlien() {
  return (
    <img
      alt="Twerking alien"
      className="w-32 min-w-0 flex-shrink"
      src="https://media.giphy.com/media/Q7pFIzANZnpA1PC5Zg/giphy.gif"
    />
  );
}

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="mb-8">
        <div className="neu-inset rounded-lg w-10/12 mx-auto flex flex-row justify-center items-center">
          <TwerkingAlien />
          <img
            alt="Snapchat Official Lens Creator Badge"
            className="w-40 min-w-0"
            src={olcBadge}
          />
          <TwerkingAlien />
        </div>
      </section>

      <section className="mb-8">
        <div className="neu-inset rounded-lg w-10/12 mx-auto flex p-4">
          <p></p>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
