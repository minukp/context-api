import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CartContext } from "../context/Context";

const RootLayout = () => {
  const { cart, total } = useContext(CartContext);
  return (
    <div>
      <nav className="main-nav">
        <h3>Context Api</h3>
        <ul>
          <li>
            <NavLink to="/">Products</NavLink>
          </li>
          <li>
            <NavLink to="cart">Cart</NavLink>
          </li>
        </ul>
        <p>
          Cart :{cart.length} <span>Total : {total}</span>
        </p>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default RootLayout;
