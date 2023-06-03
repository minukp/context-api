import { useContext } from "react";
import { CartContext } from "../context/Context";

const SingleProduct = ({ product }) => {
  const { name, price, image } = product;
  // console.log(product);

  const { cart, setCart } = useContext(CartContext);

  const addCart = () => {
    setCart([...cart, product]);
  };

  const removeFromCart = () => {
    const newCart = cart.filter((item) => item.name !== product.name);
    setCart(newCart);
  };
  //console.log(cart.length);
  return (
    <div className="single-product">
      <img style={{ maxWidth: "100%" }} src={image} alt={name} />
      <h3>Product : {name}</h3>
      <h3>Price : Rs {price}</h3>
      {cart.includes(product) ? (
        <button onClick={removeFromCart}>Remove from Cart</button>
      ) : (
        <button onClick={addCart}>Add to Cart</button>
      )}
    </div>
  );
};
export default SingleProduct;
