import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((accu, current) => accu + Number(current.price), 0));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, total, setTotal }}>
      {children}
    </CartContext.Provider>
  );
};
export default Context;
