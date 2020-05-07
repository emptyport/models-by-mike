import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <h1 className="text-2xl mb-4">Not Found</h1>

        <a href="/">
          <img src="https://media.giphy.com/media/Phg5BqsiMHDJQeNURr/giphy.gif" />
        </a>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
