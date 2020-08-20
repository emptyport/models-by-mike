import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function BugPage() {
  return (
    <Layout>
      <SEO title="Bugs" />

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8 text-m">
          <h1 className="text-2xl mb-4">Bug Time!</h1>

          <p className="mb-4">
            {`Do you have a cool bug picture you want to share? Do you need help figuring out what something is? Send it on over! If you need help identifying a bug, let me know what state you saw the bug in.`}
          </p>
          <p className="mb-4">
            {`I'd also love to share your pictures with everyone, so let me know if that's okay (don't worry if it's not, I'll still try to identify the bug). And if you send me your Snap username, you just might get a shout-out.`}
          </p>
          <p className="mb-4">{`Just send your pictures to the address below! Hope to hear from you!`}</p>
          <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#98;&#117;&#103;&#115;&#64;&#109;&#111;&#100;&#101;&#108;&#115;&#98;&#121;&#109;&#105;&#107;&#101;&#51;&#100;&#46;&#99;&#111;&#109;">
            &#98;&#117;&#103;&#115;&#64;&#109;&#111;&#100;&#101;&#108;&#115;&#98;&#121;&#109;&#105;&#107;&#101;&#51;&#100;&#46;&#99;&#111;&#109;
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default BugPage;
