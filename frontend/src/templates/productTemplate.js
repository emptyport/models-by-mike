import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Page = (props) => {
  const product = props.pageContext;
  console.log(product);
  return (
    <Layout>
      <SEO
        title={product.name}
        image={`assets/${product.image}`}
        description={product.description}
      />
      <div className="p-2 my-6 mx-auto w-full">
        <div className="flex flex-col md:flex-row">
          <img
            className="mx-auto md:w-1/3 my-auto rounded"
            src={`../assets/${product.image}`}
            alt={product.image_alt}
          />

          <div className="my-auto p-6">
            <h1 className="font-bold text-xl">{product.name}</h1>
            <p className="pb-4">{product.price}</p>
            <p className="mb-6">{product.description}</p>
            <a
              className="mx-auto border-2 border-mbmYellow rounded-lg p-2"
              href={product.item_link}
            >
              Get it here!
            </a>
            <p className="mt-8 mb-6 text-center">
              Have the shirt? Unlock the exclusive filter!
            </p>
            <a aria-label="Link to the filter" href={product.snapchat_link}>
              <img
                className="mx-auto w-32"
                alt="Snapcode for the filter"
                src={`../assets/${product.snapcode_image}`}
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Page;
