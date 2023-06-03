import { faker } from "@faker-js/faker";
import { useState } from "react";
import SingleProduct from "../components/SingleProduct";

faker.seed(100);

const productsArray = [...Array(20)].map((product) => {
  return {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.urlLoremFlickr({ category: "nature" }),
  };
});

console.log(productsArray);

const Products = () => {
  const [products] = useState(productsArray);

  return (
    <section className="container">
      <h3>Products</h3>
      <article className="products-container">
        {products.map((product) => (
          <SingleProduct product={product} key={product.name} />
        ))}
      </article>
    </section>
  );
};
export default Products;
