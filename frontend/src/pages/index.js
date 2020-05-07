import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import olcBadge from "../images/OLC_badge.png";

import Snapchat from "../images/icons/snapchat.svg";
import Instagram from "../images/icons/instagram.svg";
import Facebook from "../images/icons/facebook.svg";
import Twitter from "../images/icons/twitter.svg";
import LinkedIn from "../images/icons/linkedin.svg";

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
        <div className=" rounded-lg w-10/12 mx-auto flex flex-row justify-center items-center">
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
        <div className=" rounded-lg w-full mx-auto flex flex-col p-4 text-center text-xl">
          <p className="">Purveyor of fine augmented reality effects on</p>
          <p className="text-mbmYellow font-black">Snapchat</p>
          <p className="text-pink-500 font-black">Instagram</p>
          <p className="text-blue-500 font-black">Facebook</p>
        </div>
      </section>

      <section className="mb-8">
        <div className=" rounded-lg w-full mx-auto flex text-center text-xl justify-around items-center">
          <div className="neu-border-button rounded-full m-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.snapchat.com/add/modelsbymike3d"
            >
              <Snapchat className="p-2 w-12 fill-current" />
            </a>
          </div>

          <div className="neu-border-button rounded-full m-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/modelsbymike3d/"
            >
              <Instagram className="p-2 w-12 fill-current" />
            </a>
          </div>

          <div className="neu-border-button rounded-full m-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/ModelsByMike3D"
            >
              <Facebook className="p-2 w-12 fill-current" />
            </a>
          </div>

          <div className="neu-border-button rounded-full m-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/modelsbymike3d"
            >
              <Twitter className="p-2 w-12 fill-current" />
            </a>
          </div>

          <div className="neu-border-button rounded-full m-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/modelsbymike"
            >
              <LinkedIn className="p-2 w-12 fill-current" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
