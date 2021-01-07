import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function TwerkingAlienPage() {
  return (
    <Layout>
      <SEO
        keywords={[`twerking alien`]}
        title="Twerking Alien"
        description="The one and only twerking alien!"
      />

      <section>
        <div className="neu-inset rounded-lg p-6 text-lg">
          <img
            className="mx-auto"
            src="https://media.giphy.com/media/Q7pFIzANZnpA1PC5Zg/giphy.gif"
          />
          <div className="text-center text-2xl">
            <p>{`You danced with it`}</p>
            <p>{`You raided Area 51 together`}</p>
            <p>{`Your heart was forever changed by it`}</p>
            <p className="text-3xl mt-4">{`It's the Twerking Alien!`}</p>
          </div>

          <img className="mx-auto w-1/2 mt-12" src="/assets/80s-alien.png" />
          <p className="py-2 text-xl">
            {`And now you can take home a piece of the magic with your very own, official, 80s-inspired T-shirt! But wait, that's not all! The design on the T-shirt unlocks an exclusive, never-before-seen Snapchat lens!`}
          </p>
          <p className="text-center my-6">
            <a
              href="https://teespring.com/80s-alien?pid=46"
              className="mt-6 px-4 py-2 text-sm font-bold neu-border-button rounded-lg bg-mbmCoral mx-auto text-xl align-middle"
            >
              Click here to buy the shirt!
            </a>
          </p>
          <p>{`Click or scan the snapcode below to access the exclusive
            augmented reality lens that is activated by the shirt design.`}</p>

          <a
            href="https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=ac77786a8bf241dfb052c9dbbc38e1f6&metadata=01"
            title="Link to the exclusive Snapchat lens for the 80s-style T-shirt"
          >
            <img
              className="mx-auto mt-6 mb-12"
              src="/assets/snapcodes/80s-alien.png"
            />
          </a>
          <p className="text-center text-lg">
            {`And don't forget to try out these other lenses featuring the
            Twerking Alien!`}
          </p>
          <div className="flex flex-col mt-6">
            <div>
              <p className="text-center">{`Dance with the alien and watch it copy your moves`}</p>
              <a
                href="https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=542758f5e68a40229d4f7a8f041c619e&metadata=01"
                title="Link to the Alien Dance Pro lens"
              >
                <img
                  className="mx-auto"
                  src="/assets/snapcodes/alien-dance-pro.png"
                />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-center">{`The original lens that started it all`}</p>
              <a
                href="https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=96ae32b694d7404a858e5fca006a3295&metadata=01"
                title="Link to the original Alien Twerk lens"
              >
                <img
                  className="mx-auto"
                  src="/assets/snapcodes/twerking-alien.png"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default TwerkingAlienPage;
