import React from "react";
import TextLoop from "react-text-loop";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Modal from "../components/Modal";
import ContactForm from "../components/ContactForm";

import olcBadge from "../images/OLC_badge.png";
import alienStill from "../images/home/alien_still_optimized.png";

import Snapchat from "../images/icons/snapchat.svg";
import Instagram from "../images/icons/instagram.svg";
import Facebook from "../images/icons/facebook.svg";
import Twitter from "../images/icons/twitter.svg";
import LinkedIn from "../images/icons/linkedin.svg";

function IndexPage() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
                  <span>menu</span>
                  <span>advertisement</span>
                  <span>billboard</span>
                </TextLoop>
              </div>
              <div>to life!</div>
            </div>
            <p className="text-left text-xl text-gray-700 mt-10 mb-6">
              {`Delight your fans with an incredible augmented reality experience! I've put smiles on millions of faces on Snapchat and can help you do the same!`}
            </p>
            <div className="mx-auto flex md:justify-start justify-center">
              <button
                className="text-gray-100 text-2xl font-bold bg-red-500 neu-border-button rounded-full px-6 py-2"
                onClick={openModal}
              >
                {`Let's talk! 📧`}
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
        <Modal handleClose={closeModal} show={modalIsOpen}>
          <ContactForm onSubmit={closeModal} />
        </Modal>
      </section>

      {/* <section className="mt-16 md:mt-24">
        <div className="flex md:flex-row flex-col justify-around">
          <div className="md:w-1/3 p-2 mb-8">
            <div className="text-center text-red-500 font-bold text-shadow text-4xl mb-4">
              What
            </div>
            <ul className="list-disc">
              <li>{`Pokémon Go`}</li>
              <li>{`Twerking aliens`}</li>
              <li>{`Potato boss`}</li>
            </ul>
            <p>{`All augmented reality.`}</p>
          </div>
          <div className="md:border md:border-solid border-gray-300 mx-6"></div>
          <div className="md:w-1/3 p-2 mb-8">
            <div className="text-center text-red-500 font-bold text-shadow text-4xl mb-4">
              Why
            </div>
            <ul className="list-disc">
              <li>{`Fun`}</li>
              <li>{`Interactive`}</li>
              <li>{`Shareable`}</li>
            </ul>
          </div>
          <div className="md:border md:border-solid border-gray-300 mx-6"></div>
          <div className="md:w-1/3 p-2">
            <div className="text-center text-red-500 font-bold text-shadow text-4xl mb-4">
              How
            </div>
            <ul className="list-disc">
              <li>{`Snapchat`}</li>
              <li>{`Instagram`}</li>
              <li>{`Facebook`}</li>
              <li>{`Your website`}</li>
              <li>{`Your app`}</li>
            </ul>
          </div>
        </div>
      </section> */}

      <div className="my-16"></div>

      <section className="mb-8">
        <div className="flex flex-col content-center text-center text-lg">
          <div className="self-center mbmHeader text-4xl mb-4 text-red-500 font-bold text-shadow">
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
          <div className="self-center mbmHeader text-4xl mb-4 text-red-500 font-bold text-shadow">{`Let's talk`}</div>
          <p className="text-left">
            {`I specialize in Snapchat lenses and am recognized by Snapchat as an
            Official Lens Creator. Whether you need a brand new lens from
            scratch or see one of mine that you'd like to repurpose, I'm your
            guy.`}
          </p>
          <div className=" rounded-lg w-10/12 mx-auto flex flex-row justify-center items-center">
            <img
              alt="Snapchat Official Lens Creator Badge"
              className="w-40 min-w-0"
              src={olcBadge}
            />
          </div>

          <p className="mt-4">Interested in an effect of your own?</p>
          <div className="mx-auto flex md:justify-start justify-center mt-4">
            <button
              className="text-gray-100 text-2xl font-bold bg-red-500 neu-border-button rounded-full px-6 py-2"
              onClick={openModal}
            >
              {`Get in touch! 📧`}
            </button>
          </div>
        </div>
      </section>

      <section className="mb-8">
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
