import React from "react";
import { products } from "@/Const";
import Shop from "./Shop";

function ProductFeed() {
  return (
    <div className="flex flex-wrap items-center justify-center mt-20 p-10 text-black">
      {products.map((product) => (
        <Shop
          key={product.id}
          price={product.price}
          discription={product.discription}
          category={product.category}
          image={product.image}
          title={product.title}
        />
      ))}
    </div>
  );
}

export default ProductFeed;
