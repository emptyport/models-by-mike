import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProductCard from "../components/ProductCard";

const products = require("../../products.json");

function StorePage() {
  return (
    <Layout>
      <SEO title="Store" />

      <section className="flex flex-col items-left mx-auto w-full md:w-3/5">
        <div className="">
          {products.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
        </div>
      </section>
    </Layout>
  );
}

export default StorePage;
