import vegIcon from "../assets/veg.png";
import nonVegIcon from "../assets/nonveg.png";
import { RESTAURANT_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function MenuItem({
  isShown,
  vegClassifier,
  name,
  price,
  description,
  imageId,
}) {
  const dispatch = useDispatch();
  function addToCart() {
    dispatch(
      addItem({
        vegClassifier,
        name,
        price,
        imageId,
      })
    );
  }

  return isShown ? (
    <>
      <div className="flex justify-between items-center gap-4 px-8">
        <div className="flex flex-col gap-2 w-1/2">
          {vegClassifier === "NONVEG" ? (
            <img src={nonVegIcon} className="w-6" />
          ) : (
            <img src={vegIcon} className="w-6" />
          )}
          <p className="font-semibold">{name}</p>
          <p>{price && `₹${price / 100}`}</p>
          <p className="text-sm text-slate-500">{description}</p>
        </div>

        <div className="flex flex-col justify-center items-end gap-2">
          {imageId && (
            <img
              src={RESTAURANT_IMG_URL + imageId}
              className="max-w-full w-36 rounded-lg"
            />
          )}

          <button
            className="bg-green-200 text-green-900 font-semibold rounded-lg px-3 py-2 hover:bg-green-900 hover:text-white disabled:bg-slate-600 disabled:text-white disabled:cursor-not-allowed"
            onClick={addToCart}
            disabled={!price}
          >
            {price ? "Add" : "Out of Stock"}
          </button>
        </div>
      </div>

      <hr></hr>
    </>
  ) : null;
}

export default MenuItem;
