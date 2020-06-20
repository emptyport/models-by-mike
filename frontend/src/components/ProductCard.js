import React from "react";
import { Link } from "gatsby";

const ProductCard = ({ product }) => (
  <Link className="mx-auto w-full" to={`store/${product.slug}`}>
    <div className="neu-border-button rounded-lg p-2 my-6 mx-auto w-full">
      <div className="flex flex-row">
        <img
          className="w-1/3 my-auto rounded"
          src={`assets/${product.image}`}
          alt={product.image_alt}
        />

        <div className="my-auto p-6">
          <h1 className="font-bold text-xl">{product.name}</h1>
          <p className="pb-4">{product.price}</p>
          <p className="">{product.description}</p>
        </div>
      </div>
    </div>
  </Link>
);
export default ProductCard;
