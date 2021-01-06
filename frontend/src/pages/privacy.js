import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function PrivacyPage() {
  return (
    <Layout>
      <SEO keywords={[`privacy`]} title="Privacy" />

      <section>
        <div className="neu-inset rounded-lg p-6 text-m">
          <p className="py-2">
            I use <a className="underline" href='https://plausible.io'>Plausible</a> for my website analytics so I do not collect any personal information nor use cookies on this site.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default PrivacyPage;
