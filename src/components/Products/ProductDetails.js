import React from "react";
import products from "../../store/Products/Products";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();

  const index = products.findIndex(
    (product) => product.productId === productId
  );

  const product = products[index];

  return (
    <main style={{ display: "flex" }}>
      <section style={{ flex: 1 }}>
        <h1>{product.title}</h1>
        <img src={product.imageUrl} alt={product.title} />
        <h2>{`Price: Rs. ${product.price}`}</h2>
      </section>
      <section style={{ flex: 1 }} className="pt-5">
        <h1>Reviews</h1>
        <div>
          <h3>Nice Product</h3>
          <p>Soft and smooth. Feels comfortable.</p>
        </div>
        <div>
          <h3>Same as shown in the picture</h3>
          <p>Looks like a quality product. Like it so much.</p>
        </div>
        <div>
          <h3>Not worthy!</h3>
          <p>Color looks dull and pale.</p>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
