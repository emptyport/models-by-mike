import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8 text-m">
          <h1 className="text-2xl mb-4">About Me</h1>

          <p className="mb-4">
            {`Facebook used to have a really cool feature where you could share a 3D model as a post (this is where my working name comes from). I started making little models such as birthday cakes and graduation caps so that people could move beyond a simple 'Congrats' or 'Happy Birthday!' and share something a little more special. Shortly after I started working on these models is when I came across the augmented reality effects.`}
          </p>
          <p className="mb-4">
            {`Unfortunately, Facebook soon pulled the plug on the 3D posts (may they rest in peace).`}
          </p>
          <p className="mb-4">
            {`It was right around this time that the twerking alien took off on Snapchat, so I decided to invest most of my time on Snapchat lenses. These days I'm starting to venture back into making effects for Instagram and Facebook. I'm also looking at getting into web-based augmented reality.`}
          </p>
          <p className="mb-4">
            {`Fun fact - I have a Master's degree in biophysics, but I work in software development.`}
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
