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
            Google Analytics is used on this site to monitor site traffic. IP
            addresses are anonymized and no information is shared with 3rd
            parties.
          </p>
          <p className="py-2">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://policies.google.com/privacy"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://policies.google.com/terms"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default PrivacyPage;
