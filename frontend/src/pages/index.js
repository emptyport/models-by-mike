import React from "react";
import { Link } from "gatsby";
import TextLoop from "react-text-loop";

import Layout from "../components/layout";
import SEO from "../components/seo";
import olcBadge from "../images/OLC_badge.png";

import alienStill from "../images/home/alien_still_optimized.png";

import Snapchat from "../images/icons/snapchat.svg";
import Instagram from "../images/icons/instagram.svg";
import Facebook from "../images/icons/facebook.svg";
import Twitter from "../images/icons/twitter.svg";
import LinkedIn from "../images/icons/linkedin.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />

      <section className="">
        <div className="flex flex-col md:flex-row items-center md:justify-around justify-center">
          <div className="md:w-2/5">
            <div className="text-5xl md:text-6xl text-gray-700 text-shadow">
              <div>Bring your</div>
              <div className="text-red-500 font-bold my-4">
                <TextLoop
                  interval={2000}
                  springConfig={{ stiffness: 200, damping: 20 }}
                >
                  <span>book</span>
                  <span>music</span>
                  <span>campaign</span>
                  <span>business card</span>
                  <span>T-shirt</span>
                  <span>invitation</span>
                </TextLoop>
              </div>
              <div>to life</div>
            </div>
            <p className="text-left text-xl text-gray-700 mt-10 mb-6">
              Stand out with your own augmented reality filter for Snapchat,
              Instagram, and Facebook.
            </p>
            <div className="mx-auto flex md:justify-start justify-center">
              <button className="text-gray-100 text-2xl font-bold bg-red-500 neu-border-button rounded-full px-6 py-2">
                {`Learn how 👋`}
              </button>
            </div>
          </div>
          <div className="md:w-1/3 w-full mx-2">
            <img
              src={alienStill}
              alt="Image of the twerking alien effect being used on a smartphone"
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      <div className="my-36"></div>

      <section className="mb-8">
        <div className="flex flex-col content-center text-center text-lg">
          <div className="self-center mbmHeader text-4xl mb-4">
            Create an experience
          </div>
          <p className="text-left mb-4">
            Create an experience for your audience with augmented reality. Let
            your users be part of the story by providing them with something
            engaging and memorable.
          </p>
          <p className="text-left">
            Level up your marketing campaign. Bring your book cover to life.
            Dazzle with your business card. Tell a story.
          </p>
          <div className="mt-2 self-center mbmHeader text-xl">
            The possibilities are endless.
          </div>
        </div>
      </section>

      <section className="mb-4">
        <div className=" rounded-lg w-full mx-auto flex flex-col p-4 text-center text-lg">
          <div className="self-center mbmHeader text-4xl mb-4">{`Let's talk`}</div>
          <p className="">
            I am recognized by Snapchat as an Official Lens Creator and I can
            create AR effects for
          </p>
          <p className="text-mbmYellow font-black">Snapchat</p>
          <p className="text-pink-500 font-black">Instagram</p>
          <p className="text-blue-500 font-black">Facebook</p>
          <p className="mt-4">Are you interested in an effect of your own?</p>
          <Link
            className="mt-6 px-4 py-2 text-sm font-bold neu-border-button rounded-lg bg-mbmCoral mx-auto text-xl align-middle"
            to="/contact?utm_source=home&utm_medium=website&utm_campaign=none"
          >{`Get in touch.`}</Link>
        </div>
      </section>

      <section className="mb-8">
        <div className=" rounded-lg w-10/12 mx-auto flex flex-row justify-center items-center">
          <img
            alt="Snapchat Official Lens Creator Badge"
            className="w-40 min-w-0"
            src={olcBadge}
          />
        </div>
        <div className="w-full mx-auto p-4 text-center text-lg underline">
          <a href="https://lensstudio.snapchat.com/creator/Jn6NTlPetl3Iqtkd8MTNXQ">
            Check out my Snapchat filters here!
          </a>
        </div>
        <div className="w-full mx-auto p-4 text-center text-lg">
          <p>{`Want to create your own Snapchat lenses and Instagram filters?`}</p>
          <a href="https://arbootcamp.com" className="underline">
            Start learning for free at AR Bootcamp!
          </a>
        </div>
      </section>

      <section className="mb-8">
        <div className=" rounded-lg w-full mx-auto flex text-center text-xl justify-around items-center">
          <div className="neu-border-button rounded-full m-2">
            <a href="https://www.snapchat.com/add/modelsbymike3d">
              <Snapchat className="p-2 w-12 fill-current" />
            </a>
          </div>

          <div className="neu-border-button rounded-full m-2">
            <a href="https://www.instagram.com/modelsbymike3d/">
              <Instagram className="p-2 w-12 fill-current" />
            </a>
          </div>

          <div className="neu-border-button rounded-full m-2">
            <a href="https://www.facebook.com/ModelsByMike3D">
              <Facebook className="p-2 w-12 fill-current" />
            </a>
          </div>

          <div className="neu-border-button rounded-full m-2">
            <a href="https://twitter.com/modelsbymike3d">
              <Twitter className="p-2 w-12 fill-current" />
            </a>
          </div>

          <div className="neu-border-button rounded-full m-2">
            <a href="https://www.linkedin.com/company/modelsbymike">
              <LinkedIn className="p-2 w-12 fill-current" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
