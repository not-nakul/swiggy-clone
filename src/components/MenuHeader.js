import { RESTAURANT_IMG_URL } from "../utils/constants";

function MenuHeader({
  imageId,
  name,
  cuisines,
  area,
  locality,
  city,
  costForTwo,
  rating,
  totalRatings,
}) {
  return (
    <header className="flex justify-between items-center gap-4 p-6 bg-slate-800 text-white rounded-lg">
      <div className="flex items-center gap-4">
        <img src={RESTAURANT_IMG_URL + imageId} className="w-72 rounded-lg" />

        <div>
          <h1 className="font-bold text-2xl">{name}</h1>

          <div className="text-sm text-slate-400">
            <p>{cuisines}</p>
            <p>
              {area}, {locality}, {city}
            </p>
            <p>{costForTwo}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-2 text-center border rounded-lg">
        <p
          className={`font-semibold p-0.5 rounded-lg ${
            rating >= 4 ? `bg-green-500` : `bg-orange-500`
          }`}
        >
          ⭐{rating}
        </p>
        <hr></hr>
        <p className="text-xs">{totalRatings}</p>
      </div>
    </header>
  );
}

export default MenuHeader;
