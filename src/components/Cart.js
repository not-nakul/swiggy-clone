import { useSelector } from "react-redux";

import WideContainer from "./UI/WideContainer";

import vegIcon from "../assets/veg.png";
import nonVegIcon from "../assets/nonveg.png";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const totalAmount = useSelector((store) => store.cart.totalAmount);

  return (
    <WideContainer className="p-6 h-screen">
      <h1 className="font-semibold pb-6">SECURE CHECKOUT</h1>

      <section className="flex justify-between gap-6">
        <div className="w-3/5">
          <div className="p-6 bg-slate-200">
            Credentials section to be added...
          </div>
        </div>

        <div className="flex flex-col w-2/5 p-6 bg-slate-200">
          <h1 className="font-semibold pb-4">Items</h1>

          {cartItems.map((item) => (
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-start gap-1">
                {item.vegClassifier === "NONVEG" ? (
                  <img src={nonVegIcon} className="w-5" />
                ) : (
                  <img src={vegIcon} className="w-5" />
                )}
                <h1>{item.name}</h1>
              </div>

              <h1>₹{item.price / 100}</h1>
            </div>
          ))}

          <h1 className="font-semibold pt-8">Bill details</h1>
        </div>
      </section>
    </WideContainer>
  );
}

export default Cart;
