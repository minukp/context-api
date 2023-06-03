import { useContext, useEffect, useState } from "react";
import SingleProduct from "../components/SingleProduct";
import { CartContext } from "../context/Context";

const Cart = () => {
  const { cart, total, setTotal } = useContext(CartContext);
  /// const [total, setTotal] = useState(0);
  console.log(cart);

  return (
    <section className="container">
      <h2>My Cart</h2>
      <h3>Total : {total}</h3>
      <article className="products-container">
        {cart.length == 0 ? (
          <h3>Cart is Empty, please Add products</h3>
        ) : (
          cart.map((product) => (
            <SingleProduct product={product} key={product.name} />
          ))
        )}
      </article>
    </section>
  );
};
export default Cart;
