import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import WideContainer from "./UI/WideContainer";

function Header() {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <nav className="w-full shadow-lg">
      <WideContainer className="flex justify-between items-center p-2">
        <h1 className="text-3xl font-bold select-none">🥗🍴</h1>

        <ul className="flex gap-6 font-semibold">
          <li className="hover:text-orange-400 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-400 cursor-pointer">
            <Link to="/support">Support</Link>
          </li>
          <li className="hover:text-orange-400 cursor-pointer">Sign-in</li>
          <li className="hover:text-orange-400 cursor-pointer">
            <Link to="/cart">Cart {cartItems.length}</Link>
          </li>
        </ul>
      </WideContainer>
    </nav>
  );
}

export default Header;
