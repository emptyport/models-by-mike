import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8 text-lg">
          <p>
            {`I'm a programmer and ex-biochemist. I make Snapchat lenses by night,
            and sometimes I venture into the dark realm of Instagram filters.`}
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
